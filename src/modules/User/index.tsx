import { ProfileObject, QuestEncounterFunctoinality } from "../../interfaces";
import { useAuth0 } from "@auth0/auth0-react";
import {useState, useEffect} from 'react'
import SpriteAni from '../Common/SpriteAnimation'
import hero from "../../assets/Hero/Hero_Idle.png";
import "./Profile.scss";

const LogoutButton = () => {
  const {
    logout
  } = useAuth0();
  return (
    <div className="logout-button" style={{cursor: "pointer", zIndex: 99}} onClick={() => logout({ returnTo: window.location.origin + "/" })}>
      Log Out
    </div>
  );
};

type UserProfile = ProfileObject | QuestEncounterFunctoinality;

const Profile: React.FC<UserProfile> = (props) => {
  const { currentUser } = props as ProfileObject;
  const { setActivePage, ...others } = props as QuestEncounterFunctoinality;
  setActivePage("profile");

  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-dsbofkr3.us.auth0.com";
  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently]);

  if(user) {
    console.log("Hi i am a new user")
  }
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
        {user.name}
      </h1>
      <h2 className="user-xp">Current EXP:{user.xp}</h2>
      <h3 className="user-email">E-mail:{user.email}</h3>
      <LogoutButton/>
    </section>
    )}
    </>
  );
    }
};

export default Profile;
