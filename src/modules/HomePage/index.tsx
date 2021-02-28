import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Common/Menu";
import MenuItem from "../Common/MenuItem";
import Grid from "../../ui/Grid/Grid";
import Profile from "../User";
import UserQuestLog from "../UserQuestLog";
import { useEffect, useState } from "react";
import userRoutes from "../../routes/user";
import ProfileTabActive from "../../assets/Tabs/Tab_UserProfile_Active.png";
import ProfileTab from "../../assets/Tabs/Tab_UserProfile_Inactive.png";
import QuestsTabActive from "../../assets/Tabs/Tab_NewQuests_Active.png";
import QuestsTab from "../../assets/Tabs/Tab_NewQuests_Inactice.png";
import QuestLogTabActive from "../../assets/Tabs/Tab_QuestLog_Active.png";
import QuestLogTab from "../../assets/Tabs/Tab_QuestLog_Inactive.png";
import "./HomePage.scss";

interface HomePageProps {
  children?: object;
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const { children } = props;
  //Homepage component that have a navigation bar and render components based on the url
  const [buttonRole, setButtonRole] = useState<string>("");

  return (
    <section className="homepage">
      <section className="tabs-grid">
        <Link className="profile-tab" to={userRoutes.profile.path}>
          <img className="tab" src={ProfileTab} alt="" />
        </Link>
        <Link className="quests-tab" to={userRoutes.availableQuests.path}>
          <img className="tab" src={QuestsTab} alt="" />
        </Link>
        <Link className="quest-log-tab" to={userRoutes.userQuestLog.path}>
          <img className="tab" src={QuestLogTab} alt="" />
        </Link>
      </section>
      {children}
    </section>
  );
};

export default HomePage;
