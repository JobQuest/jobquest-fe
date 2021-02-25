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
import testData from '../test_assets/mock_data'

const quests = testData.quests

// make a promise for a current quest
// const availableQuestst = [...quests, quests[0].encouters: testData.encounters]
//const getQuestDetails = () => {
//  Promise.all([apiCalls.getCurrentQuest(questId) , apiCalls.etQuestEncounter(questId, userProgress)]).then(
//  (data) => {
//    if (data[0]) {
//      setUserQuest(data[0]);
//      setCurrentEncounter(data[1]);
//    }
//  }
//);
//}

//Make a promise for encounter
//const getEncounterDetails = (action) => {
//  Promise.all(apiCalls.etQuestEncounter(questId, userProgress)).then(
//  (data) => {
//    if (data[0]) {
//      action(data[0]);
//    }
//  }
//);
//}
const App = () => {
  const [user, setUser] = useState<any | null>(null);
  const [completedQuests, setCompletedQuests] = useState<any | null>(null);

  const getUserInfo = () => {
    Promise.resolve(apiCalls.getUser({ email: "olga@example.com" }))
      .then((response) => setUser(response.data.attributes))
      .then((response) => getCompletedQuests());
  };

  const getCompletedQuests = () => {
    Promise.resolve(apiCalls.getQuests("1")).then((response) =>
      setCompletedQuests(questCleaner(response.data.attributes.quests))
    );
  };

  const questCleaner = (badQuests: Array<object>) => {
    return badQuests.map((badQuest) => Object.values(badQuest)[0]);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getUserInfo(), []);

  if (user) {
    return (
      <main className="App">
        <HomePage>
          <Route
            exact
            path={userRoutes.profile.path}
            render={() => <Profile user={user} />}
          />
          {completedQuests && (
            <Route
              exact
              path={userRoutes.userQuestLog.path}
              component={() => (
                <UserQuestLog completedQuests={completedQuests} />
              )}
            />
          )}
          <Route exact path={userRoutes.currentQuest.path} render={({match}) => <Quest quests={quests} match={match}/>}/>
          <Route exact path={userRoutes.availableQuests.path} render={({match}) => <QuestsList quests={quests} match={match}/>} />
        </HomePage>
      </main>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default App;
