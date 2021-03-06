import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./QuestsList.scss";
import {
  QuestInProgress,
  CurrentQuests,
  ComponentPath,
  CardTypeObj,
  QuestEncounterFunctoinality,
} from "../../interfaces";
import questCardActive from "../../assets/Quest Cards/QuestCard_Active.png";
import questCardActiveH from "../../assets/Quest Cards/QuestCard_Active_Hover.png";
import questCardPassive from "../../assets/Quest Cards/QuestCard_Passive.png";
import questCardPassiveH from "../../assets/Quest Cards/QuestCard_Passive_Hover.png";
import questCardSupportive from "../../assets/Quest Cards/QuestCard_Supportive.png";
import questCardSupportiveH from "../../assets/Quest Cards/QuestCard_Supportive_Hover.png";

type QuestProps = (CurrentQuests & ComponentPath) | QuestEncounterFunctoinality;

const QuestList: React.FC<QuestProps> = (props) => {
  const { quests } = props as CurrentQuests;
  const { getQuestDetails } = props as QuestEncounterFunctoinality;
  const [questTypes, setQuestTypes] = useState<object>({
    active: false,
    passive: false,
    supportive: false,
  });

  const findQuestByType = (type: string) => {
    if (quests) {
      return quests.find((quest) => quest.type === type);
    } else {
      return null;
    }
  };

  const questTypesNames: Array<string> = ["active", "passive", "supportive"];

  const availbaleListOfQuests = {
    active: findQuestByType("active"),
    passive: findQuestByType("passive"),
    supportive: findQuestByType("supportive"),
  };

  const cardTypes: CardTypeObj = {
    active: [questCardActive, questCardActiveH],
    passive: [questCardPassive, questCardPassiveH],
    supportive: [questCardSupportive, questCardSupportiveH],
  };

  const displayQuestCard = (
    type: string,
    quest: QuestInProgress | null | undefined
  ) => {
    if (quest) {
      return (
        <Link
          onMouseOver={() =>
            setQuestTypes({ ...questTypes, [quest.type]: true })
          }
          onMouseOut={() =>
            setQuestTypes({ ...questTypes, [quest.type]: false })
          }
          style={{
            backgroundImage:
              `url(` +
              `${
                questTypes[quest.type]
                  ? cardTypes[quest.type][1]
                  : cardTypes[quest.type][0]
              }` +
              `)`,
          }}
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
                <p className="quests-card-details">
                  Encounters: {quest.encounter_req}
                </p>
              </div>
              <div className="quest-card-wrapper__right-side">
                <p className="quests-card-details">Level {quest.level}</p>
                <p className="quests-card-details">{quest.type}</p>
              </div>
            </div>
          </div>
        </Link>
      );
    } else if (quest === null || quest === undefined) {
      return (
        <section
          style={{
            backgroundImage: `url(` + `${cardTypes[type][0]}` + `)`,
            justifyContent: "center",
          }}
          className="quest-card-wrapper-completed"
          data-cy={`quest-${type}`}
          key={`quest-${type}`}
        >
          <div className="quest-card-inner-wrapper-completed">
            <h2 className="quests-card-title">{type} quests are completed</h2>
            <div className="quest-card-inner-box">
              <p className="quests-card-details">
                Please wait for the next update
              </p>
            </div>
          </div>
        </section>
      );
    }
  };

  useEffect(() => {
    getQuestDetails();
  }, []);

  if (!quests.length) {
    return (
      <section data-cy="quests-list-container" className="page-quest-list">
        <h2 className="component-title">You completed all Quests!</h2>
        <section className="quests-list-wrapper">
          {questTypesNames.map((name) => {
            return displayQuestCard(name, availbaleListOfQuests[name]);
          })}
        </section>
      </section>
    );
  } else {
    return (
      <section data-cy="quests-list-container" className="page-quest-list">
        <h2 className="component-title">
          Available <br /> Quests
        </h2>
        <p className="instructional-text">
          Choose a quest from the list below! The symbol on the right of the
          quest card dictates the type of job search actions you must complete
          to make progress on your quest.
        </p>
        <section className="quests-list-wrapper">
          {questTypesNames.map((name) => {
            return displayQuestCard(name, availbaleListOfQuests[name]);
          })}
        </section>
      </section>
    );
  }
};

export default QuestList;
