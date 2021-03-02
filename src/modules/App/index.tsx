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
import { QuestInProgress, UserProfile, CurrentProfileObject } from "../../interfaces";
import { apiCalls } from "../../apiCalls";
import Auth from '../Auth';
import { useAuth0 } from "@auth0/auth0-react";

const userId = {
  id: "5",
  email: "curtis@example.com",
};

const App = () => {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [completedQuests, setCompletedQuests] = useState<
    QuestInProgress[] | null
  >(null);

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [availableQuests, setAvailableQuests] = useState<QuestInProgress[]>([]);

  const getUserInfo = () => {
    Promise.resolve(apiCalls.getUser({ email: userId.email }))
      .then((response) => setCurrentUser(response.data.attributes))
      .then((response) => getCompletedQuests());
  };

  const getCompletedQuests = (): Promise<any[]> => {
    return Promise.resolve(apiCalls.getQuests(userId.id, true)).then(
      (response) => {
        let cleanedQuests = questCleaner(response.data.attributes.quests);
        setCompletedQuests(cleanedQuests);
        return cleanedQuests;
      }
    );
  };

  const getQuestDetails = (): Promise<object> => {
    return Promise.resolve(apiCalls.getQuests(userId.id, false)).then(
      (response) => {
        let availableQuestsList = response.data.attributes.quests.map(
          (quest) => Object.values(quest)[0]
        );
        setAvailableQuests(availableQuestsList);
        return availableQuestsList;
      }
    );
  };

  const questCleaner = (badQuests: Array<object>) => {
    return badQuests.map((badQuest) => Object.values(badQuest)[0]);
  };

  useEffect(() => getUserInfo(), []);
  useEffect(() => {
    getQuestDetails();
  }, []);
  if (user) {
    const newUser = {
      email: user.email,
      name: user.nickname
    }
  }
    // run post request function where we setCurrentUser to a database create user
    //if current user exists, have a conditional rendering for the app itself
  if (availableQuests) {
    return (
      <main className="App">
        <Switch>
          <Route exact path="/" component={Auth} />
          {isAuthenticated &&
            <HomePage>
            <Route
              exact path={userRoutes.profile.path}
              render={() => <Profile currentUser={user} />}
            />
            {completedQuests && (
              <Route
                exact
                path={userRoutes.userQuestLog.path}
                component={() => (
                  <UserQuestLog
                    getCompletedQuests={getCompletedQuests}
                    completedQuests={completedQuests}
                  />
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
            <Route
            exact
            path={userRoutes.availableQuests.path}
            render={({ match }) => (
              <QuestsList
                getQuestDetails={getQuestDetails}
                quests={availableQuests}
                match={match}
              />
            )}
          />
        </HomePage>
      }
        </Switch>
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
