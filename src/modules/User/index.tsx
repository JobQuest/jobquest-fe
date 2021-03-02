import { ProfileObject, QuestEncounterFunctoinality } from "../../interfaces";
import SpriteAni from '../Common/SpriteAnimation'
import hero from "../../assets/Hero/Hero_Idle.png";
import "./Profile.scss";

type UserProfile = ProfileObject | QuestEncounterFunctoinality;

const Profile: React.FC<UserProfile> = (props) => {
  const { user } = props as ProfileObject;
  const { setActivePage, ...others } = props as QuestEncounterFunctoinality;

  return (
    <section className="page-profile">
      <h1 className="user-page-title">My Profile</h1>
      <SpriteAni styleClass="profile-hero" path={hero} step={480} lastFrame={-3840} speed={400} width={480} height={188} />
      <h1 data-cy="username" className="user-page-title">
        {user.username}
      </h1>
      <h2 className="user-xp">Current EXP:{user.xp}</h2>
      <h3 className="user-email">E-mail:{user.email}</h3>
    </section>
  );
};

export default Profile;
