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
      setUserProgress(newQuest.progress)
      getEncounterInfo(questId, userProgress)
      getMonsterHealth() 
    }
  }

  const getMonsterHealth = () => {
    let i = 0;
    let heartsList: Heart[] = []
    if(userQuest) {
      while (i < userQuest.encounter_req) {
        i++;
        heartsList.push({
          image: <img key={`heart-${i}`} className="monster-health" src={userProgress >= i ? HeartFull : HeartEmpty} alt="heart"/>,
          id: i
        })
      }
      setHearts(heartsList)
    }
  };

  const getEncounterInfo: typeof getEncounter = async (questId: string, progressLevel: number) => {
    return await Promise.resolve(apiCalls.getQuestEncounter(parseInt(questId), progressLevel))
    .then((response) => {
      setCurrentEncounter(response.data.attributes)})
  }

  const completeQuest = () => {
    let lastEncounter = {
      "quest_id": questId,
      "progress": `${userProgress+1}`
    }
    apiCalls.patchUserQuest("8", lastEncounter)
    .then((response) => {
      setIsQuestCompleted(response.data.attributes.completion_status); 
      history.push(`/quests`)
    })
  }

  const switchProgressLevel = async () => {
    let currentEncounter = {
      "quest_id": questId,
      "progress": `${userProgress}`
    }
    if(userQuest && userProgress < userQuest.encounter_req) {
      return await Promise.resolve(apiCalls.patchUserQuest("1", currentEncounter))
      .then((response) => {
          setIsQuestCompleted(response.data.attributes.completion_status);
     })
    }
    if(userQuest && userProgress === userQuest.encounter_req) {
      apiCalls.patchUserQuest("7", currentEncounter)
      .then((response) => {
        setIsQuestCompleted(response.data.attributes.completion_status); 
        setCurrentEncounter(null)
      })
    }
  };

  useEffect(() => {
    getQuestInfo(questId)
  }, [userQuest]);

  useEffect(() => {
    getEncounterInfo(questId, userProgress)
  }, []);

  if (!userQuest || !currentEncounter) {
    return (
      <section data-cy="single-quest-container" className="page-quest-list">
          <h2 className="component-title">You killed the moster!</h2>
          <section className="quest-wrapper">
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
