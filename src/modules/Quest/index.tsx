import { useEffect, useState } from 'react'
import Grid from '../../ui/Grid/Grid'
import {useParams} from 'react-router-dom'
import ActionButton from '../../ui/ActionButton/ActionButton'
//this is the component that has a current quest that hols all the information
interface Quest {
  id: number
  name: string 
  points: number
  description: string
  encounters: number
  type: string
}

interface QuestPath {
  match: object
}

interface Encounter {
  id: number
  description: string
  type: string
  monsterImage: string
}

interface Action {
  id: number
  encounter_id: number
  type: string
  description: string
  title: string
}

// type CurrentQuest = Quest & Encounter & Action & QuestPath
type CurrentQuest =  QuestPath
const Quest: React.FC<CurrentQuest> = (props) => {
  const [currentQuest, setCurrentQuest] = useState<object>({})
  const {match} = props

  console.log(match)
  return (
    <section style={{border: "1px solid black",
    height: '90vh',
    marginTop: 'auto',
    marginBottom: 'auto',
    padding: '1em'}}>
      <div>
        <h2>Name of The Quest</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
          pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
          Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
          in pretium orci vestibulum eget.
        </p>
      </div>
      <div style={{display: "flex", justifyContent:"space-around", marginTop: "1.5em", marginBottom: "1.5em"}}>
        <h2>200 XP</h2>
        <img style={{width: "150px"}} src="http://pixelartmaker.com/art/ab8d3d041eef31b.png"/>
      </div>
      {/* action buttons to fight the moster that moves you to the next encounter */}
      <div style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        <ActionButton />
        <ActionButton />
      </div>
    </section>
  )
}

export default Quest;