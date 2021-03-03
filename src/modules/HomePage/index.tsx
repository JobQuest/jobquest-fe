import React from "react";
import { Link, useLocation } from "react-router-dom";
import userRoutes from "../../routes/user";
import ActiveProfileTab from "../../assets/Tabs/Tab_UserProfile_Active.png";
import ActiveQuestsTab from "../../assets/Tabs/Tab_NewQuests_Active.png";
import ActiveQuestLogTab from "../../assets/Tabs/Tab_QuestLog_Active.png";
import ProfileTab from "../../assets/Tabs/Tab_UserProfile_Inactive.png";
import QuestsTab from "../../assets/Tabs/Tab_NewQuests_Inactice.png";
import QuestLogTab from "../../assets/Tabs/Tab_QuestLog_Inactive.png";
import "./HomePage.scss";

const HomePage: React.FC = ({ children }) => {
  const history = useLocation();

  return (
    <section data-cy="homepage-container" className="homepage">
      <section className="tabs-grid">
        <Link
          data-cy="profile-tab"
          className="profile-tab"
          aria-label="My profile"
          to={userRoutes.profile.path}
        >
          <img
            className="tab"
            src={
              history.pathname === "/profile" ? ActiveProfileTab : ProfileTab
            }
            alt=""
          />
        </Link>

        <Link
          data-cy="quests-tab"
          className="quests-tab"
          aria-label="Quest list"
          to={userRoutes.availableQuests.path}
        >
          <img
            className="tab"
            src={history.pathname === "/quests" ? ActiveQuestsTab : QuestsTab}
            alt=""
          />
        </Link>

        <Link
          data-cy="questslog-tab"
          className="quest-log-tab"
          aria-label="Quest log"
          to={userRoutes.userQuestLog.path}
        >
          <img
            className="tab"
            src={
              history.pathname === "/quests-log"
                ? ActiveQuestLogTab
                : QuestLogTab
            }
            alt=""
          />
        </Link>
      </section>
      {children}
    </section>
  );
};

export default HomePage;
