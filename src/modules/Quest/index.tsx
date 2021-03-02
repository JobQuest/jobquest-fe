import './Quest.scss'
import { useEffect, useState } from 'react'
import { 
          QuestInProgress, 
          ComponentPath, 
          ActionCards, 
          QuestEncounterFunctoinality, 
          Heart, 
          idObject, 
          Encounter, 
          ActionCardsCheck 
        } from '../../interfaces'
import { apiCalls } from '../../apiCalls'
import { useHistory } from 'react-router-dom'
import SpriteAni from '../Common/SpriteAnimation'
import HeartEmpty from '../../assets/Extras/Heart_Empty.png'
import HeartFull from '../../assets/Extras/Heart_Full.png'
import ActionStage from '../../assets/Extras/ActionStage.png'
import ActionCardOne from '../../assets/Action Cards/ActionCard_1.png'
import ActionCardOneH from '../../assets/Action Cards/ActionCard_1_Hover.png'
import ActionCardTwo from '../../assets/Action Cards/ActionCard_2.png'
import ActionCardTwoH from '../../assets/Action Cards/ActionCard_2_Hover.png'
import HeroAttackOne from "../../assets/Hero/Hero_Attack_1.png";

type CurrentQuest =
  | ComponentPath
  | QuestEncounterFunctoinality
  | idObject

const Quest: React.FC<CurrentQuest> = (props) => {

  const [userQuest, setUserQuest] = useState<QuestInProgress | null>(null)
  const [currentEncounter, setCurrentEncounter] = useState<Encounter | null>(null)
  const [hearts, setHearts] = useState<Heart[]>([])
  const [isQuestCompleted, setIsQuestCompleted] = useState<boolean>(false)
  const [questCards, setQuestCards] = useState<ActionCardsCheck>({
    cardOne: false,
    cardTwo: false,
  });
  const cardActions: ActionCards = {
    cardOne: [ActionCardOne, ActionCardOneH],
    cardTwo: [ActionCardTwo, ActionCardTwoH]
  } 
  const history = useHistory();
  
  const {id} = props as idObject
  const {match} = props as ComponentPath
  const {getQuest, getEncounter, getQuestDetails, updateMonsterHealth, helperFunction, ...others} = props as QuestEncounterFunctoinality
  const questId = match.params.id;

  const getQuestInfo: typeof getQuest = async (id) => {
    const updatedQuests = await getQuestDetails()
    let newQuest = updatedQuests.find(quest => quest.id === parseInt(id))
    if(newQuest) {
      setUserQuest(newQuest)
      getEncounterInfo(questId, newQuest.progress)
      getMonsterHealth(newQuest) 
    }
    if(!newQuest) {
      setIsQuestCompleted(true)
    }
  }

  const getMonsterHealth: typeof updateMonsterHealth = (newquest) => {
    let i = 1;
    let heartsList: Heart[] = []
    if(newquest) {
      while (i <= newquest.encounter_req) {
        heartsList.push({
          image: <img key={`heart-${i}`} className="monster-health" src={newquest.progress <= i ? HeartFull : HeartEmpty} alt="heart"/>,
          id: i
        })
        i++;
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

  const completeQuest: typeof helperFunction = () => {
    history.push(`/quests`)
  }

  const switchProgressLevel: typeof helperFunction = async () => {
    if(userQuest) {
      let currentEncounter = {
        "quest_id": questId,
        "progress": `${userQuest.progress + 1}`
      }

    await apiCalls.patchUserQuest(id.toString(), currentEncounter)
      .then((response) => {
        let completionStatus = response.data.attributes.completion_status
        if(!completionStatus) {
          getQuestInfo(questId)
          getQuestDetails()
        } else {
          setCurrentEncounter(null)
        }
      })
      setQuestCards({
        cardOne: false,
        cardTwo: false,
      })
    }
  }

  useEffect(() => {
    getQuestInfo(questId)
  }, [isQuestCompleted]);

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
            <SpriteAni styleClass="img-hero" path={HeroAttackOne} step={480} lastFrame={-3840} speed={700} width={480} height={230} />
            <img className="img-monster" src={currentEncounter.monster_image} alt="monster-pic"/> 
          </div>
          <div data-cy="quest-details" className="single-quest-details">
            <h3 className="single-quest-details__title">
              Level {userQuest.level}-{userQuest.progress}
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
