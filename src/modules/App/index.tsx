import React from 'react';
import './App.scss';
import Profile from '../User'
import Grid from '../../ui/Grid/Grid'
import Quest from '../Quest'
import Menu from '../Common/Menu'
import MenuItem from '../Common/Menu'
import LeftPage from '../LeftPage'
import RightPage from '../RightPage'
import {routes} from '../../routes'
import { Route, Switch } from 'react-router-dom'

type LocationPath = 
  | "/user/profile"
  | "/user/quests-log"
  | "/user/quests"
  | "/user/current-quest";


const App= () => {
  return (
    <main className="App">
      <Grid row={true} alignItems={'center'}>
      <Switch>

    </Switch>
        <LeftPage />
        <RightPage />
      </Grid>
    </main>
  );
}

export default App;
