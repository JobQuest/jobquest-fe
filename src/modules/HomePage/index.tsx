import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Common/Menu";
import MenuItem from "../Common/MenuItem";
import userRoutes from "../../routes/user";
import ProfileTab from "../../assets/Tabs/Tab_UserProfile_Inactive.png";
import QuestsTab from "../../assets/Tabs/Tab_NewQuests_Inactice.png";
import QuestLogTab from "../../assets/Tabs/Tab_QuestLog_Inactive.png";
import "./HomePage.scss";

interface HomePageProps {
  children?: object;
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const { children } = props;

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
