import { useEffect, useState } from 'react'
import Grid from '../../ui/Grid/Grid'
import {Link} from 'react-router-dom'
import userRoutes from '../../routes/user'
import "./QuestList.scss";
import { CurrentQuests, ComponentPath } from '../../interfaces'
//this is a component where user can see available quests that can be accepted

type QuestProps = CurrentQuests & ComponentPath

const QuestList: React.FC<QuestProps> = (props) => {
  const {match, quests} = props
  const [currentQuest, setCurrentQuest] = useState<object>({})

  return (
    <section className=".component-container page-quest-list">
      <h2>Available Quests</h2>
      <section style= {{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        {quests.length && 
          quests.map(quest => 
            <Link to={`/quests/${quest.id}`}>
            <div style={{
              height: "10em",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              border: "1px solid red",
              marginTop: "1em",
            }}> 
            <div style={{
              height: "10em",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              border: "1px solid red",
              marginTop: "1em",
              }}>
              <h2 style={{ margin: "0.5em"}}>{quest.name}</h2>
                <p style={{ margin: "0"}}>{quest.xp} XP</p>
                <p style={{ margin: "0"}}>Encounters: {quest.encounter_req}</p>
              </div>
              <div style={{
                width: "20em", 
                display: "flex", 
                flexDirection: "column",
                justifyContent: "center"
                }}>
                <p style={{ margin: "0"}}>Level {quest.level}</p>
                <p style={{ margin: "0"}}>{quest.type}</p>
              </div>
            </div>
          </Link> 
        )}
      </section>
    </section>
  );
};

export default QuestList;
