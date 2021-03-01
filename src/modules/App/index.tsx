import React from "react";
import { useEffect, useState } from "react";
import "./App.scss";
import Profile from "../User";
import Quest from "../Quest";
import UserQuestLog from "../UserQuestLog";
import HomePage from "../HomePage";
import QuestsList from "../QuestsList";
import userRoutes from "../../routes/user";
import { Route, Switch, useParams } from "react-router-dom";
import { QuestInProgress, UserProfile } from "../../interfaces";
import { apiCalls } from "../../apiCalls";

const userId = {
  id: "5",
  email: "curtis@example.com"
}

const App = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [completedQuests, setCompletedQuests] = useState<QuestInProgress[] | null>(null);
  const [availableQuests, setAvailableQuests] = useState<QuestInProgress[]>([]);

  const getUserInfo = () => {
    Promise.resolve(apiCalls.getUser({ email: userId.email }))
      .then((response) => setUser(response.data.attributes))
      .then((response) => getCompletedQuests());
  };

  const getCompletedQuests = () => {
    Promise.resolve(apiCalls.getQuests(userId.id, true)).then((response) =>
      setCompletedQuests(questCleaner(response.data.attributes.quests))
    );
  };

  const getQuestDetails = (): Promise<object> => {
    return Promise.resolve(apiCalls.getQuests(userId.id, false))
    .then((response) => {
      let availableQuestsList = response.data.attributes.quests.map(quest => Object.values(quest)[0])
      setAvailableQuests(availableQuestsList)
      return availableQuestsList
    })
}

  const questCleaner = (badQuests: Array<object>) => {
    return badQuests.map((badQuest) => Object.values(badQuest)[0]);
  };

  useEffect(() => getUserInfo(), []);
  useEffect(() => {getQuestDetails()}, []);

  if (user) {
    return (
      <main className="App">
        <HomePage>
          <Route path="/" render={() => <Profile user={user} />} />
          {completedQuests && (
            <Route
              exact
              path={userRoutes.userQuestLog.path}
              component={() => (
                <UserQuestLog completedQuests={completedQuests} />
              )}
            />
          )}
          <Route
            exact
            path={userRoutes.currentQuest.path}
            render={({ match }) => (
              <Quest
                id={parseInt(userId.id)} 
                getQuestDetails={getQuestDetails}
                match={match}
              />
            )}
          />
          {!!availableQuests.length && (
            <Route
              exact
              path={userRoutes.availableQuests.path}
              render={({ match }) => (
                <QuestsList getQuestDetails={getQuestDetails} quests={availableQuests} match={match} />
              )}
            />
          )}
        </HomePage>
      </main>
    );
  } else {
    return (
      <main className="App">
        <img
          className="loader"
          src="https://media.giphy.com/media/1yld7nW3oQ2IyRubUm/giphy.gif"
          alt="calming village"
        ></img>
        <p className="loader-text">Loading...</p>
      </main>
    );
  }
};

export default App;
