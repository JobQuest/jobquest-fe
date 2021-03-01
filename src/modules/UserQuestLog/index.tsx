import "./QuestLog.scss";
import {
  idObject,
  Quest,
  CompletedQuests,
  QuestEncounterFunctoinality,
} from "../../interfaces";

const DUMMYDATA = [
  {
    id: 2,
    name: "Punch the biggest goblin right in the schnoz",
    xp: 42,
    encounter_req: 1,
    type: "active",
    progress: 1,
  },
  {
    id: 3,
    name: "Punch the smallest goblin right in the jaw",
    xp: 24,
    encounter_req: 1,
    type: "passive",
    progress: 1,
  },
  {
    id: 4,
    name: "Punch the biggest goblin right in the schnoz",
    xp: 42,
    encounter_req: 1,
    type: "active",
    progress: 1,
  },
  {
    id: 5,
    name: "Punch the smallest goblin right in the jaw",
    xp: 24,
    encounter_req: 1,
    type: "passive",
    progress: 1,
  },
  {
    id: 6,
    name: "Punch the biggest goblin right in the schnoz",
    xp: 42,
    encounter_req: 1,
    type: "active",
    progress: 1,
  },
  {
    id: 7,
    name: "Punch the smallest goblin right in the jaw",
    xp: 24,
    encounter_req: 1,
    type: "passive",
    progress: 1,
  },
];

type QuestLog = CompletedQuests | QuestEncounterFunctoinality;

const UserQuestLog: React.FC<QuestLog> = (props) => {
  const { setActivePage } = props as QuestEncounterFunctoinality;
  const { completedQuests } = props as CompletedQuests;
  setActivePage("quest-log");
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
          {
            !completedQuests[0] &&
              DUMMYDATA.map((questRecord: Quest) => (
                <div key={questRecord.id} className="quest-record">
                  <div className="quest-record-info-wrapper">
                    <h2 cy-data="quest-record-title">{questRecord.name}</h2>
                    <p cy-data="quest-record-xp">Exp earned:{questRecord.xp}</p>
                    <p cy-data="quest-record-type">Type:{questRecord.type}</p>
                  </div>
                </div>
              ))

            // <div className="quest-record-info-wrapper">
            //   <p className="quest-record-error">
            //     Records of your completed quests will display here. Go complete
            //     some quests!
            //   </p>
            // </div>
          }
        </section>
      </section>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default UserQuestLog;
