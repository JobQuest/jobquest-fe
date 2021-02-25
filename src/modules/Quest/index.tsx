import { useEffect, useState } from 'react'
import Grid from '../../ui/Grid/Grid'
import {useParams} from 'react-router-dom'
import ActionButton from '../../ui/ActionButton/ActionButton'
import { QuestInProgress, CurrentQuests, ComponentPath, Encounter, QuestEncounterFunctoinality } from '../../interfaces'
import testData from '../test_assets/mock_data'
import "./Quest.scss";
//this is the component that has a current quest that hols all the information

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
    
      <section style={{
        border: "1px solid black",
        height: '90vh',
        marginTop: 'auto',
        marginBottom: 'auto',
        padding: '1em',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      >
        <h2>{userQuest.name}</h2>
        {/* heart img */}
        <div>
          <img />
        </div>
        {/* box with the sprites for a monster and a hero */}
        <div style={{
          height: "30em",
          width: "30em",
          border: "1px solid green",
          marginTop: "1em"
        }
        }>
          <img/>
          <img style={{width: "150px"}} src={currentEncounter.monster_image}/>
        </div>
        <div style={{
          display: "flex", 
          justifyContent:"space-around", 
          marginTop: "1.5em", 
          marginBottom: "1.5em"}}>
          <h2>{userQuest.xp} XP</h2>
        </div>
        {/* action buttons to fight the moster that moves you to the next encounter */}
        <div style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'space-around'
        }}>
          <div>
            <p>{currentEncounter.actions[0].description}</p>
          </div>
          <div>
            <p>{currentEncounter.actions[1].description}</p>
          </div>
        </div>
      </section>
    )
  } else return null

}

export default Quest;
