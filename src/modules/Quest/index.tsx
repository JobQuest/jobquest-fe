import { useEffect, useState } from 'react'
import './Quest.scss'
import { QuestInProgress, CurrentQuests, ComponentPath, ActionCards, QuestEncounterFunctoinality } from '../../interfaces'
import testData from '../test_assets/mock_data'
import { apiCalls } from '../../apiCalls'
import HeroIdle from '../../assets/Hero/Hero_Idle.png'
import HeartEmpty from '../../assets/Extras/Heart_Empty.png'
import HeartFull from '../../assets/Extras/Heart_Full.png'
import ActionStage from '../../assets/Extras/ActionStage.png'
import MonsterAttack from '../../assets/Hero/Monster_Attack.png'
import ActionCardOne from '../../assets/Action Cards/ActionCard_1.png'
import ActionCardOneH from '../../assets/Action Cards/ActionCard_1_Hover.png'
import ActionCardTwo from '../../assets/Action Cards/ActionCard_2.png'
import ActionCardTwoH from '../../assets/Action Cards/ActionCard_2_Hover.png'

type CurrentQuest = ComponentPath & CurrentQuests | QuestEncounterFunctoinality

const Quest: React.FC<CurrentQuest> = (props) => {

  const [userProgress, setUserProgress] = useState<number>(1)
  const [userQuest, setUserQuest] = useState<QuestInProgress | null>(null)
  const [currentEncounter, setCurrentEncounter] = useState<any | null>(null)
  const [isQuestCompleted, setIsQuestCompleted] = useState<boolean | false>(false)
  const [questCards, setQuestCards] = useState<any>({
    cardOne: false,
    cardTwo: false
  })

  const cardActions: ActionCards  = {
    cardOne: [ActionCardOne, ActionCardOneH],
    cardTwo: [ActionCardTwo, ActionCardTwoH]
  } 
  const currentQuest: QuestInProgress = testData.quests[0]

  const {match} = props as ComponentPath
  const {quests} = props as CurrentQuests
  const {getQuest, getEncounter, getQuestDetails, ...others} = props as QuestEncounterFunctoinality
  
  // const encounters = testData.allEncounters
  const getQuestInfo: typeof getQuest = async (id) => {
    let newQuest = quests.find(quest => quest.id === parseInt(id))
    if(newQuest) {
      setUserQuest(newQuest)
      setUserProgress(newQuest.progress)
      getEncounterInfo(questId, userProgress)
    }
  }

  const getEncounterInfo: typeof getEncounter = async (questId: string, progressLevel: number) => {
    return await Promise.resolve(apiCalls.getQuestEncounter(parseInt(questId), progressLevel))
    .then((response) => {
      console.log(response)
      setCurrentEncounter(response.data.attributes)})
  }

  const switchProgressLevel = () => {
    let currentEncounter = {
      "quest_id": questId,
      "progress": `${userProgress}`
    }
    apiCalls.patchUserQuest(currentEncounter)
    .then((response) => {
    setIsQuestCompleted(response.data.attributes.completion_status) 
    console.log(response)})
    if(!setIsQuestCompleted) {
      setUserProgress(userProgress + 1)
    } else {
      console.log("User did not complete the quest")
      //here we will add a comletion compoenent/message
    }
  }

  const questId = match.params.id;

  useEffect(() => {
    getQuestInfo(questId)
  }, [userProgress]);

  console.log(userQuest)

  if(!userQuest || !currentEncounter) {
    return (
      <section data-cy="single-quest-container" className="single-quest-container">
          <h2 className="component-title">Sorry, but this quest is unavailable</h2>
      </section>
    )
  } else { return (
      <section data-cy="single-quest-container" className="page-quest-list">
        <h2 className="component-title">{userQuest.name}</h2>
        {/* heart img */}
        <section className="quest-wrapper">
          <div className="monster-health-container">
            <img className="monster-health" 
            src={userProgress < 3 ? HeartFull : HeartEmpty} alt="heart-1"/>
            <img className="monster-health" src={userProgress >= 2 ? HeartFull : HeartEmpty} alt="heart-2"/>
            <img className="monster-health" src={userProgress === 1 ? HeartFull : HeartEmpty} alt="heart-3"/>
          </div>
          <div 
            data-cy="encounter-story-container" 
            className="encounter-story-container"
            style={{backgroundImage: `url(`+ `${ActionStage}`+`)`}} 
            >
            <div className="img-hero" style={{backgroundImage: `url(`+ `${HeroIdle}`+`)`}}></div>
            {/* <img className="img-monster" src={currentEncounter.monster_image} alt="monster-pic"/> 
            needs an image to render, will be uncommented when we get full data*/}
            <div className="img-monster" style={{backgroundImage: `url(`+ `${MonsterAttack}`+`)`}}></div>

          </div>
          <div  data-cy="quest-details" className="single-quest-details">
            <h3 className="single-quest-details__title">Level {userQuest.level}</h3>
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
    )
  } 
}

export default Quest;
