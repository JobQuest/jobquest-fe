import "./QuestLog.scss";
import { useEffect } from "react";
import {
  idObject,
  Quest,
  CompletedQuests,
  QuestEncounterFunctoinality,
} from "../../interfaces";

type QuestLog = CompletedQuests | QuestEncounterFunctoinality;

const UserQuestLog: React.FC<QuestLog> = (props) => {
  const { getCompletedQuests } = props as QuestEncounterFunctoinality;
  const { completedQuests } = props as CompletedQuests;
 
  useEffect(() => {
    getCompletedQuests();
  }, []);
 
  if (completedQuests) {
    return (
      <section data-cy="quests-log-container" className="page-questlog">
        <h2 className="quest-log-page-title">
          My Quest <br />
          Log
        </h2>
        <section data-cy="quests-log-wrapper" className="quest-record-display-bkg">
          {completedQuests[0] &&
            completedQuests.map((questRecord: Quest) => (
              <div data-cy="completed-quest-card" key={questRecord.id} className="quest-record">
                <div className="quest-record-info-wrapper">
                  <h2 data-cy="quest-record-title">{questRecord.name}</h2>
                  <p data-cy="quest-record-xp">Exp earned:{questRecord.xp}</p>
                  <p data-cy="quest-record-type">Type:{questRecord.type}</p>
                </div>
              </div>
            ))}
          {!completedQuests[0] && (
            <p className="quest-record-error">
              Records of your completed quests will display here. Go complete
              some quests!
            </p>
          )}
        </section>
      </section>
    );
  } else {
    return (
      <section className="page-questlog-loading">
        <section className="page-questlog-loading">
          <h1>Loading...</h1>
        </section>
      </section>
    )
  }
};

export default UserQuestLog;
