import { ProfileObject, QuestEncounterFunctoinality } from "../../interfaces";
import { useAuth0 } from "@auth0/auth0-react";
import {useState, useEffect} from 'react'
import SpriteAni from '../Common/SpriteAnimation'
import hero from "../../assets/Hero/Hero_Idle.png";
import "./Profile.scss";
import LogoutButton from '../Common/LogoutButton'

type UserProfile = ProfileObject | QuestEncounterFunctoinality;

const Profile: React.FC<UserProfile> = (props) => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  const { currentUser } = props as ProfileObject;
  const { getUserInfo } = props as QuestEncounterFunctoinality;

  useEffect(() => getUserInfo(), [])

  if (isLoading) {
    return <div>Loading ...</div>;
  } else {
  return (
    <>
    {isAuthenticated && (
    <section className="page-profile">
      <h1 className="user-page-title">My Profile</h1>
      <SpriteAni
        styleClass="profile-hero"
        path={hero}
        step={480}
        lastFrame={-3840}
        speed={400}
        width={480}
        height={188}
      />
      <h1 data-cy="username" className="user-page-title">
        {currentUser.username}
      </h1>
      <h2 className="user-xp">Current XP: {currentUser.xp}</h2>
      <h3 className="user-email">E-mail: {currentUser.email}</h3>
      <LogoutButton/>
    </section>
    )}
    </>
  );
    }
};

export default Profile;
