import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import "./QuestsList.scss";
import { CurrentQuests, ComponentPath, CardTypeObj } from '../../interfaces'
import questCardActive from '../../assets/Quest Cards/QuestCard_Active.png'
import questCardActiveH from '../../assets/Quest Cards/QuestCard_Active_Hover.png'
import questCardPassive from '../../assets/Quest Cards/QuestCard_Passive.png'
import questCardPassiveH from '../../assets/Quest Cards/QuestCard_Passive_Hover.png'
import questCardSupportive from '../../assets/Quest Cards/QuestCard_Supportive.png'
import questCardSupportiveH from '../../assets/Quest Cards/QuestCard_Supportive_Hover.png'

type QuestProps = CurrentQuests & ComponentPath

const QuestList: React.FC<QuestProps> = (props) => {
  const {quests} = props
  const [questTypes, setQuestTypes] = useState<object>({
    active: false,
    passive: false,
    supportive: false
  })

  const cardTypes: CardTypeObj  = {
    active: [questCardActive, questCardActiveH],
    passive: [questCardPassive, questCardPassiveH],
    supportive: [questCardSupportive, questCardSupportiveH]
  } 

  if(!quests.length) {
    return (
      <section data-cy="single-quest-container" className="single-quest-container">
          <h2 className="component-title">Sorry, but this quest is unavailable</h2>
      </section>
    )
  } else {
    console.log(quests)
    return (
      <section data-cy="quests-list-container" className="page-quest-list">
        <h2 className="component-title">Available Quests</h2>
        <section className="quests-list-wrapper">
          {quests.length && 
            quests.map(quest => 
              <Link 
                onMouseOver={() => setQuestTypes({...questTypes, [quest.type]: true})}
                onMouseOut={() => setQuestTypes({...questTypes, [quest.type]: false})}
                style={{backgroundImage: `url(`+ `${questTypes[quest.type] ? cardTypes[quest.type][1] : cardTypes[quest.type][0]}`+`)`}} 
                className="quest-card-wrapper" 
                key={`quest-${quest.id}`} 
                data-cy={`quest-${quest.type}`} 
                to={`/quests/${quest.id}`}
              >
                <div className="quest-card-inner-wrapper"> 
                  <h2 className="quests-card-title">{quest.name}</h2>
                  <div className="quest-card-inner-box">
                    <div className="quest-card-wrapper__left-side">
                      <p className="quests-card-details">{quest.xp} XP</p>
                      <p className="quests-card-details">Encounters: {quest.encounter_req}</p>
                    </div>
                    <div className="quest-card-wrapper__right-side">
                      <p className="quests-card-details">Level {quest.level}</p>
                      <p className="quests-card-details">{quest.type}</p>
                    </div>
                  </div>
                </div>
            </Link> 
          )}
        </section>
      </section>
    );
  }
};

export default QuestList;
