import { useEffect, useState } from 'react'
import Grid from '../../ui/Grid/Grid'
import {Link} from 'react-router-dom'
import Button from '../../ui/Button/Button'
import userRoutes from '../../routes/user'
//this is a component where user can see available quests that can be accepted
interface QuestList {
  // id: number
  // name: string 
  // points: number
  // description: string
  // encounters: number
  // type: string
  match: object
}


type QuestProps = QuestList

const QuestList: React.FC<QuestProps> = (props) => {
  const {match} = props
  const [currentQuest, setCurrentQuest] = useState<object>({})
  
  return (
    <section style={{border: "1px solid black",
    height: '90vh',
    marginTop: 'auto',
    marginBottom: 'auto',
    padding: '1em',
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center"}}>
      <h2>Available Quests</h2>
      <Link to={`/quests/1`}>
        <div style={{
          height: "10em",
          width: "100%",
          display: 'flex',
          flexDirection: "column",
          border: "1px solid red",
          marginTop: "1em"
        }}>
          <div>
            <h2>Name of The Quest 1</h2>
            <img/>
            <p>Type</p>
          </div>
          <Button />
        </div>
      </Link>
      <div style={{
        height: "10em",
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        border: "1px solid red",
        marginTop: "1em"
      }}>
        <div>
          <h2>Name of The Quest 1</h2>
          <img/>
          <p>Type</p>
        </div>
        <Button />
      </div>
      <div style={{
        height: "10em",
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        border: "1px solid red",
        marginTop: "1em"
      }}>
        <div>
          <h2>Name of The Quest 2</h2>
          <img/>
          <p>Type</p>
        </div>
        <Button />
      </div>
      <div style={{
        height: "10em",
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        border: "1px solid red",
        marginTop: "1em"
      }}>
        <div>
          <h2>Name of The Quest 3</h2>
          <img/>
          <p>Type</p>
        </div>
        <Button />
      </div>
    </section>
  )
}

export default QuestList;