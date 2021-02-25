import { useEffect, useState } from "react";
import Grid from "../../ui/Grid/Grid";
import "./QuestLog.scss";
//this is a component where user can see available quests that can be accepted

const UserQuestLog = () => {
  return (
    <section className="page-questlog">
      <h2>My Quest Log</h2>
      <div className="divone">
        <div
          style={{
            height: "100%",
          }}
        >
          <h2>My Quest 1</h2>
          <p>200XP</p>
          <p>Type</p>
        </div>
      </div>
      <div className="divone">
        <div
          style={{
            height: "100%",
          }}
        >
          <h2>My Quest 2</h2>
          <p>200XP</p>
          <p>Type</p>
        </div>
      </div>
      <div className="divone">
        <div
          style={{
            height: "100%",
          }}
        >
          <h2>My Quest 3</h2>
          <p>200XP</p>
          <p>Type</p>
        </div>
      </div>
    </section>
  );
};

export default UserQuestLog;
