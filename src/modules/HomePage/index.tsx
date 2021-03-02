import React from "react";
import { Link } from "react-router-dom";
import userRoutes from "../../routes/user";
import ActiveProfileTab from "../../assets/Tabs/Tab_UserProfile_Active.png";
import ActiveQuestsTab from "../../assets/Tabs/Tab_NewQuests_Active.png";
import ActiveQuestLogTab from "../../assets/Tabs/Tab_QuestLog_Active.png";
import ProfileTab from "../../assets/Tabs/Tab_UserProfile_Inactive.png";
import QuestsTab from "../../assets/Tabs/Tab_NewQuests_Inactice.png";
import QuestLogTab from "../../assets/Tabs/Tab_QuestLog_Inactive.png";
import { HomePageProps } from "../../interfaces";
import "./HomePage.scss";


const HomePage: React.FC<HomePageProps> = ({ activePage, children }) => {
 
  return (
    <section className="homepage">
      <section className="tabs-grid">
        {activePage === "profile" && (
          <Link className="profile-tab" to={userRoutes.profile.path}>
            <img className="tab" src={ActiveProfileTab} alt="" />
          </Link>
        )}
        {activePage !== "profile" && (
          <Link className="profile-tab" to={userRoutes.profile.path}>
            <img className="tab" src={ProfileTab} alt="" />
          </Link>
        )}
        {activePage === "quests" && (
          <Link className="quests-tab" to={userRoutes.availableQuests.path}>
            <img className="tab" src={ActiveQuestsTab} alt="" />
          </Link>
        )}
        {activePage !== "quests" && (
          <Link className="quests-tab" to={userRoutes.availableQuests.path}>
            <img className="tab" src={QuestsTab} alt="" />
          </Link>
        )}
        {activePage === "quest-log" && (
          <Link className="quest-log-tab" to={userRoutes.userQuestLog.path}>
            <img className="tab" src={ActiveQuestLogTab} alt="" />
          </Link>
        )}
        {activePage !== "quest-log" && (
          <Link className="quest-log-tab" to={userRoutes.userQuestLog.path}>
            <img className="tab" src={QuestLogTab} alt="" />
          </Link>
        )}
      </section>
      {children}
    </section>
  );
};

export default HomePage;
