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

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [userId, setUserId] = useState<number | null>(null)
  const [completedQuests, setCompletedQuests] = useState<
    QuestInProgress[] | null
  >(null);

  const [availableQuests, setAvailableQuests] = useState<QuestInProgress[]>([]);

  const getUserInfo = () => {
    if(user) {
      return Promise.resolve(apiCalls.getUser(
        { email: user.email,
          username: user.username
        }))
        .then((response) => {
          setUserId(response.data.id)
          setCurrentUser(response.data.attributes)
        })
    };
  }

  const getCompletedQuests = async () => {
    if(userId) {
      await Promise.resolve(apiCalls.getQuests(userId, true)).then((response) =>
      setCompletedQuests(questCleaner(response.data.attributes.quests))
    );
    }
  };

  const getQuestDetails = (): Promise<object> | null => {
    if(userId) {
      return Promise.resolve(apiCalls.getQuests(userId, false)).then(
        (response) => {
          let availableQuestsList = response.data.attributes.quests.map(
            (quest) => Object.values(quest)[0]
          );
          setAvailableQuests(availableQuestsList);
          return availableQuestsList;
        }
      );
    } else {
      return null
    }
  };

  const returnUnverifiedEmailBlock = () => {
    return(
      <main className="App">
        <section data-cy="single-quest-container" className="page-quest-list">
          <h2 className="component-title">Please verify your email!</h2>
          </section>
        </main>
    )
  }

  const questCleaner = (badQuests: Array<object>) => {
    return badQuests.map((badQuest) => Object.values(badQuest)[0]);
  };

  useEffect(() => {
   if(user) { 
     getUserInfo() 
     getCompletedQuests();
    } else { 
      returnUnverifiedEmailBlock()
    }
  }, [isLoading]);

  useEffect(() => {
    getQuestDetails();
  }, []);

  useEffect(() => {
    if(currentUser) {
      getCompletedQuests();
    }
  }, [currentUser]);

  if (availableQuests) {
    return (
      <main className="App">
        <Switch>
          {currentUser && userId &&
            <HomePage>
            <Route
              exact path={userRoutes.profile.path}
              render={() => <Profile currentUser={currentUser} />}
            />
            {completedQuests &&
              <Route
                exact
                path={userRoutes.userQuestLog.path}
                render={() => (
                  <UserQuestLog
                    getCompletedQuests={getCompletedQuests}
                    completedQuests={completedQuests}
                  />
                )}
              />}
              <Route
              exact
              path={userRoutes.currentQuest.path}
              render={({ match }) => (
                <Quest
                  id={userId}
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
      <Route exact path="/" component={Auth} />
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
