import "./QuestLog.scss";

interface idObject {
  id: number;
}

interface Quest extends idObject {
  name: string;
  xp: number;
  encounter_req: number;
  type: string;
  progress: number;
}

interface CompletedQuests {
  completedQuests: Array<Quest>;
}

const UserQuestLog: React.FC<CompletedQuests> = ({ completedQuests }) => {
  if (completedQuests) {
    return (
      <section className="page-questlog">
        <h2 className="quest-log-page-title">
          My Quest <br />
          Log
        </h2>
        <section className="quest-record-display-bkg">
          {completedQuests &&
            completedQuests.map((questRecord: Quest) => (
              <div key={questRecord.id} className="quest-record">
                <div className="quest-record-info-wrapper">
                  <h2 cy-data="quest-record-title">{questRecord.name}</h2>
                  <p cy-data="quest-record-xp">Exp earned:{questRecord.xp}</p>
                  <p cy-data="quest-record-type">Type:{questRecord.type}</p>
                </div>
              </div>
            ))}
          {!completedQuests && (
            <div className="quest-record-info-wrapper">
              <h2>
                Records of your completed quests will display here. Go complete
                some quests!
              </h2>
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
