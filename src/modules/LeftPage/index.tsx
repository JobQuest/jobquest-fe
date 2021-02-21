import React from 'react';
import Menu from '../Common/Menu'
import MenuItem from '../Common/MenuItem'
import Grid from '../../ui/Grid/Grid'
import Profile from '../User'
// import { Link } from 'react-router-dom'

const LeftPage = () => {
  //Left Page component that will hold user information compoenent and quest log component
  return (
    <Grid column={true} sm={2} md={2}>
      <Menu toOne="/user/profile" toTwo="/user/quests-log"/>
      <Profile/>
    </Grid>
  );
}

export default LeftPage;