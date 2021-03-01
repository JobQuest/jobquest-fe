import './Quest.scss'
import { useEffect, useState } from 'react'
import { QuestInProgress, CurrentQuests, ComponentPath, ActionCards, QuestEncounterFunctoinality, Heart } from '../../interfaces'
import { apiCalls } from '../../apiCalls'
import { useHistory } from 'react-router-dom'
import HeroIdle from '../../assets/Hero/Hero_Idle.png'
import HeartEmpty from '../../assets/Extras/Heart_Empty.png'
import HeartFull from '../../assets/Extras/Heart_Full.png'
import ActionStage from '../../assets/Extras/ActionStage.png'
import ActionCardOne from '../../assets/Action Cards/ActionCard_1.png'
import ActionCardOneH from '../../assets/Action Cards/ActionCard_1_Hover.png'
import ActionCardTwo from '../../assets/Action Cards/ActionCard_2.png'
import ActionCardTwoH from '../../assets/Action Cards/ActionCard_2_Hover.png'
import user from '../../routes/user'

type CurrentQuest =
  | (ComponentPath & CurrentQuests)
  | QuestEncounterFunctoinality;

const Quest: React.FC<CurrentQuest> = (props) => {

  const [userProgress, setUserProgress] = useState<number>(1)
  const [userQuest, setUserQuest] = useState<QuestInProgress | null>(null)
  const [currentEncounter, setCurrentEncounter] = useState<any | null>(null)
  const [hearts, setHearts] = useState<Heart[]>([])
  const [isQuestCompleted, setIsQuestCompleted] = useState<boolean | false>(false)
  const [questCards, setQuestCards] = useState<any>({
    cardOne: false,
    cardTwo: false,
  });

  const cardActions: ActionCards = {
    cardOne: [ActionCardOne, ActionCardOneH],
    cardTwo: [ActionCardTwo, ActionCardTwoH]
  } 
  const history = useHistory();
  const {match} = props as ComponentPath
  const {quests} = props as CurrentQuests
  const {getQuest, getEncounter, getQuestDetails, ...others} = props as QuestEncounterFunctoinality
  const questId = match.params.id;

  const getQuestInfo: typeof getQuest = async (id) => {
    let newQuest = quests.find(quest => quest.id === parseInt(id))
    if(newQuest) {
      setUserQuest(newQuest)
      setUserProgress(newQuest.progress+1)
      getEncounterInfo(questId, newQuest.progress)
      getMonsterHealth() 
      console.log("On load This quest progress to submit" + " " + userProgress)
      console.log("On load This quest progress" + " " + userQuest?.progress)
    }
  }

  const getMonsterHealth = () => {
    let i = 1;
    let heartsList: Heart[] = []
    if(userQuest) {
      while (i <= userQuest.encounter_req) {
        console.log("encouter" + " "+ i )
        console.log(typeof userProgress)
        i++;
        heartsList.push({
          image: <img key={`heart-${i}`} className="monster-health" src={userProgress <= i ? HeartFull : HeartEmpty} alt="heart"/>,
          id: i
        })
      }
      setHearts(heartsList)
    }
  };

  const getEncounterInfo: typeof getEncounter = async (questId: string, progressLevel: number) => {
    return await Promise.resolve(apiCalls.getQuestEncounter(parseInt(questId), progressLevel))
    .then((response) => {
      if(response) {
        setCurrentEncounter(response.data.attributes)
      } else {
        setCurrentEncounter(null)
        setQuestCards({
          cardOne: false,
          cardTwo: false,
        })
      }
    })
  }

  const completeQuest = () => {
    let lastEncounter = {
      "quest_id": questId,
      "progress": `${userProgress}`
    }
    apiCalls.patchUserQuest("4", lastEncounter)
    .then((response) => {
      console.log(`Ecnouter reg: ${userQuest?.encounter_req} Progress to complete` + ' ' + lastEncounter.progress)
    setIsQuestCompleted(response.data.attributes.completion_status); 
    console.log(`Last progress response` + ' ' + response.data.attributes.response);
    console.log(`Final isCompleted` + ' ' + isQuestCompleted)
    history.push(`/quests`)
    })
  }

  const switchProgressLevel = async () => {
    let currentEncounter = {
      "quest_id": questId,
      "progress": `${userProgress}`
    }
    console.log(`Current Progress to patch` + userProgress)
    console.log(`Current Encounter to patch` + " " + currentEncounter.progress)
    if(userQuest && userProgress < userQuest.encounter_req) {
      return await Promise.resolve(apiCalls.patchUserQuest("4", currentEncounter))
        .then((response) => {
          setUserProgress(userProgress)
          // console.log(`Not completed` + ' ' + response)
        // setIsQuestCompleted(response.data.attributes.completion_status);
        console.log(`Not completed` + ' ' + response) 
     })
    }
    if(userQuest && userQuest.progress === userQuest.encounter_req) {
       console.log(`Last Progress` + userProgress)
       console.log(`Last Encounter` + currentEncounter.progress)
       console.log(userProgress === userQuest.encounter_req)

      apiCalls.patchUserQuest("4", currentEncounter)
      .then((response) => {
        setIsQuestCompleted(true); 
        console.log(`Last progress response` + ' ' + response.data.attributes.response);
        // setUserQuest(null)
        setCurrentEncounter(null)
      })
    }
    setQuestCards({
      cardOne: false,
      cardTwo: false,
    })
  }

  useEffect(() => {
    getQuestInfo(questId)
  }, [userQuest]);

  useEffect(() => {
    if(userQuest) {
      getEncounterInfo(questId, userQuest.progress)
    }
  }, []);

  if (!userQuest || !currentEncounter || isQuestCompleted) {
    return (
      <section data-cy="single-quest-container" className="page-quest-list">
          <h2 className="component-title">You killed the moster!</h2>
          <section className="complete-quest">
              <div className="encounter-details__action-card"
                style={{backgroundImage: `url(`+ `${questCards.cardOne ? cardActions.cardOne[1] : cardActions.cardOne[0]}`+`)`}}
                onMouseOver={() => setQuestCards({...questCards, cardOne: true})}
                onMouseOut={() => setQuestCards({...questCards, cardOne: false})}
                onClick={completeQuest}>
                  <p className="action-desc">Complete your Quest!</p>
              </div>
          </section>
      </section>
    );
  } else {
    return (
      <section data-cy="single-quest-container" className="page-quest-list">
        <h2 className="component-title">{userQuest.name}</h2>
        <section className="quest-wrapper">
          <div className="monster-health-container">
             {
               hearts.map(img => img.image)
             }
          </div>
          <div
            data-cy="encounter-story-container"
            className="encounter-story-container"
            style={{backgroundImage: `url(`+ `${ActionStage}`+`)`}} 
            >
            <div className="img-hero" style={{backgroundImage: `url(`+ `${HeroIdle}`+`)`}}></div>
            <img className="img-monster" src={currentEncounter.monster_image} alt="monster-pic"/> 
          </div>
          <div data-cy="quest-details" className="single-quest-details">
            <h3 className="single-quest-details__title">
              Level {userQuest.level}
            </h3>
            <h3 className="single-quest-details__title">{userQuest.xp} XP</h3>
          </div>
            <div data-cy="action-cards-container" className="encounter-details">
              <div 
                data-cy="action-card-left" 
                className="encounter-details__action-card"
                style={{backgroundImage: `url(`+ `${questCards.cardOne ? cardActions.cardOne[1] : cardActions.cardOne[0]}`+`)`}} 
                onMouseOver={() => setQuestCards({...questCards, cardOne: true})}
                onMouseOut={() => setQuestCards({...questCards, cardOne: false})}
                onClick={switchProgressLevel}
                >
                {currentEncounter.actions[0] &&
                <p className="action-desc">{currentEncounter.actions[0].description}</p>
                } 
              </div>
              <div 
                data-cy="action-card-right" 
                className="encounter-details__action-card"
                onMouseOver={() => setQuestCards({...questCards, cardTwo: true})}
                onMouseOut={() => setQuestCards({...questCards, cardTwo: false})}
                onClick={switchProgressLevel}
                style={{backgroundImage: `url(`+ `${questCards.cardTwo ? cardActions.cardTwo[1] : cardActions.cardTwo[0]}`+`)`}} 
                >
                {currentEncounter.actions[1] &&
                  <p className="action-desc">{currentEncounter.actions[1].description}</p>
                } 
              </div>
            </div>
        </section>
      </section>
    );
  }
};

export default Quest;
