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

const App = () => {
  return (
    <main className="App">
      <HomePage>
        <Route exact path={userRoutes.profile.path} component={Profile} />
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
};

export default App;
