import React from 'react';
import Menu from '../Common/Menu'
import MenuItem from '../Common/MenuItem'
import Grid from '../../ui/Grid/Grid'
import Quest from '../Quest'
// import { Link } from 'react-router-dom'

const RightPage = () => {
  //Left Page component that will hold user information compoenent and quest log component
  return (
    <Grid column={true} sm={2} md={2}>
      <Menu toOne="/user/quests" toTwo="/user/current-quest"/>
      <Quest/>
    </Grid>
  );
}

export default RightPage;