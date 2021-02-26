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

const DUMMYquests = [
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

const UserQuestLog: React.FC<CompletedQuests> = ({ completedQuests }) => {
  if (completedQuests) {
    return (
      <section className="page-questlog">
        <h2 className="quest-log-page-title">
          My Quest <br />
          Log
        </h2>
        <section className="quest-record-display-bkg">
          {completedQuests.map((individualQuest: Quest) => (
            <div className="quest-record">
              <div className="quest-record-info-wrapper">
                <h2>{individualQuest.name}</h2>
                <p>Exp earned:{individualQuest.xp}</p>
                <p>Type:{individualQuest.type}</p>
              </div>
            </div>
          ))}
        </section>
      </section>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default UserQuestLog;
