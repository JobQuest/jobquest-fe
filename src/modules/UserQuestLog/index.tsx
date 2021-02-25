import { useEffect, useState } from "react";
import Grid from "../../ui/Grid/Grid";
import "./QuestLog.scss";
//this is a component where user can see available quests that can be accepted

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

type UserQuestLogProps = Quest;

const quests = [
  {
    id: 1,
    type: "active",
    name: "Slap a Goblin",
    xp: 100,
    encounter_req: 1,
    progress: 1,
  },
  {
    id: 2,
    type: "passive",
    name: "Slay Ashardalon the Red Dragon",
    xp: 1000,
    encounter_req: 3,
    progress: 3,
  },
];

const UserQuestLog = () => {
  const [completedQuests, setCompletedQuests] = useState<any | null>(null);

  // setCompletedQuests(quests);

  // if (completedQuests) {
  return (
    <section className="page-questlog">
      <h2 className="quest-log-page-title">
        My Quest <br />
        Log
      </h2>
      {quests.map((quest: Quest) => (
        <div className="quest-record">
          <div className="quest-record-info-wrapper">
            <h2>{quest.name}</h2>
            <p>Exp earned:{quest.xp}</p>
            <p>Type:{quest.type}</p>
          </div>
        </div>
      ))}
    </section>
  );
  // }
};

export default UserQuestLog;
