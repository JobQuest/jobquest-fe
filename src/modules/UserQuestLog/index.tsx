import "./QuestLog.scss";
import { idObject, Quest, CompletedQuests } from '../../interfaces'

const UserQuestLog: React.FC<CompletedQuests> = ({ completedQuests }) => {
  if (completedQuests) {
    return (
      <section className="page-questlog">
        <h2 className="quest-log-page-title">
          My Quest <br />
          Log
        </h2>
        <section className="quest-record-display-bkg">
          {completedQuests[0] &&
            completedQuests.map((questRecord: Quest) => (
              <div key={questRecord.id} className="quest-record">
                <div className="quest-record-info-wrapper">
                  <h2 cy-data="quest-record-title">{questRecord.name}</h2>
                  <p cy-data="quest-record-xp">Exp earned:{questRecord.xp}</p>
                  <p cy-data="quest-record-type">Type:{questRecord.type}</p>
                </div>
              </div>
            ))}
          {!completedQuests[0] && (
            <div className="quest-record-info-wrapper">
              <p className="quest-record-error">
                Records of your completed quests will display here. Go complete
                some quests!
              </p>
            </div>
          )}
        </section>
      </section>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default UserQuestLog;
