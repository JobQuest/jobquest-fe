import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import userRoutes from '../../routes/user'
import "./QuestList.scss";
import { CurrentQuests, ComponentPath } from '../../interfaces'

type QuestProps = CurrentQuests & ComponentPath

const QuestList: React.FC<QuestProps> = (props) => {
  const {match, quests} = props
  const [currentQuest, setCurrentQuest] = useState<object>({})

  return (
    <section data-cy="quests-list-container" className="component-container page-quest-list">
      <h2 className="quests-container-title">Available Quests</h2>
      <section className="quests-list-wrapper">
        {quests.length && 
          quests.map(quest => 
            <Link data-cy={`quest-${quest.type}`} to={`/quests/${quest.id}`}>
            <div className="quest-card-wrapper"> 
              <div className="quest-card-wrapper__left-side">
              <h2 className="quests-card-title">{quest.name}</h2>
                <p className="quests-card-details">{quest.xp} XP</p>
                <p className="quests-card-details">Encounters: {quest.encounter_req}</p>
              </div>
              <div className="quest-card-wrapper__right-side">
                <p className="quests-card-details">Level {quest.level}</p>
                <p className="quests-card-details">{quest.type}</p>
              </div>
            </div>
          </Link> 
        )}
      </section>
    </section>
  );
};

export default QuestList;
