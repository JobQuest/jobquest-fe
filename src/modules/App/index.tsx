import React from "react";
import "./App.scss";
import Profile from "../User";
import Grid from "../../ui/Grid/Grid";
import Quest from "../Quest";
import UserQuestLog from "../UserQuestLog";
import HomePage from "../HomePage";
import QuestsList from "../QuestsList";
import userRoutes from "../../routes/user";
import { Route, Switch, useParams } from "react-router-dom";
import { apiCalls } from "../../apiCalls";
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState<any | null>(null);
  const [completedQuests, setCompletedQuests] = useState<any | null>(null);

  const getUserInfo = () => {
    Promise.resolve(
      apiCalls.getUser({ email: "olga@example.com" })
    ).then((response) => setUser(response.data.attributes));
  };

  const getCompletedQuests = () => {
    Promise.resolve(apiCalls.getQuests("1")).then((response) =>
      setCompletedQuests(response.data.attributes.quests)
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getUserInfo(), []);

  if (user) {
    getCompletedQuests();
    return (
      <main className="App">
        <HomePage>
          <Route
            exact
            path={userRoutes.profile.path}
            render={() => <Profile user={user} />}
          />
          <Route
            exact
            path={userRoutes.userQuestLog.path}
            component={UserQuestLog}
          />
          <Route exact path={userRoutes.currentQuest.path} component={Quest} />
          <Route
            exact
            path={userRoutes.availableQuests.path}
            render={({ match }) => <QuestsList match={match} />}
          />
        </HomePage>
      </main>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default App;
