import React from 'react';
import Menu from '../Common/Menu'
import MenuItem from '../Common/MenuItem'
import Grid from '../../ui/Grid/Grid'
import Profile from '../User'
import UserQuestLog from '../UserQuestLog'
import { useEffect, useState } from 'react'
import userRoutes from '../../routes/user'

interface HomePageProps {
  children?: object
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const {children} = props
  //Homepage component that have a navigation bar and render components based on the url
  const [buttonRole, setButtonRole] = useState<string>('')

  return (
    <Grid column={true} sm={1} md={1}>
      <Menu>
        <MenuItem path={userRoutes.profile.path} />
        <MenuItem path={userRoutes.userQuestLog.path} />
        <MenuItem path={userRoutes.availableQuests.path} />
      </Menu>
      {children}
    </Grid>
  );
}

export default HomePage;