import { useEffect, useState } from 'react'
import './Quest.scss'
import ActionButton from '../../ui/ActionButton/ActionButton'
import { QuestInProgress, CurrentQuests, ComponentPath, Encounter, QuestEncounterFunctoinality } from '../../interfaces'
import testData from '../test_assets/mock_data'

type CurrentQuest = ComponentPath & CurrentQuests | QuestEncounterFunctoinality

const Quest: React.FC<CurrentQuest> = (props) => {

  const [userProgress, setProgress] = useState<number>(0)
  const [userQuest, setUserQuest] = useState<QuestInProgress | null>(null)
  const [currentEncounter, setCurrentEncounter] = useState<any | null>(null)
  const currentQuest: QuestInProgress = testData.quests[0]

  const {match} = props as ComponentPath
  const {quests} = props as CurrentQuests
  const {getQuest, getEncounter, ...others} = props as QuestEncounterFunctoinality
  
  // const encounters = testData.allEncounters
  const getQuestInfo: typeof getQuest = (id) => {
    let newQuest = quests.find(quest => quest.id === id)
    if(newQuest) {
      setUserQuest(newQuest)
      setProgress(newQuest.progress)
    }
  }

  const getEncounterInfo: typeof getEncounter = (progressId) => {
    //will be an api call
    let newEncounter = testData.allEncounters.find(encounter => encounter.progress === progressId)
    if(newEncounter) {
      setCurrentEncounter(newEncounter)
    }
  }

  const questId = match.params.id;
  const switchEncounter = () => {
    //will be a api patch request
    //change progress
    //update hearts 
  }

  useEffect(() => getQuestInfo(parseInt(questId)), [userQuest]);
  useEffect(() => getEncounterInfo(userProgress), [userProgress]);

  console.log(match.params.id)
  console.log(currentEncounter)
  console.log(userQuest)

  if(userQuest && currentEncounter) {
    return (
      <section data-cy="single-quest-container" className="single-quest-container">
        <h2 className="component-title">{userQuest.name}</h2>
        {/* heart img */}
        <div className="monster-health-container">
          <img className="monster-health" alt="heart"/>
        </div>
        {/* box with the sprites for a monster and a hero */}
        <div data-cy="encounter-story-container" className="encounter-story-container">
          <img className="img-hero" alt="hero-pic"/>
          <img className="img-monster" style={{width: "150px"}} src={currentEncounter.monster_image} alt="monster-pic"/>
        </div>
        <div  data-cy="quest-details" className="single-quest-details">
          <h3 className="single-quest-details__title">Level {userQuest.level}</h3>
          <h3 className="single-quest-details__title">{userQuest.xp} XP</h3>
        </div>
        {/* action buttons to fight the moster that moves you to the next encounter */}
        <div data-cy="action-cards-container" className="encounter-details">
          <div data-cy="action-card-left" className="encounter-details__action-card">
            <p className="action-desc">{currentEncounter.actions[0].description}</p>
          </div>
          <div data-cy="action-card-right" className="encounter-details__action-card">
            <p className="action-desc">{currentEncounter.actions[1].description}</p>
          </div>
        </div>
      </section>
    )
  } else return null

}

export default Quest;
