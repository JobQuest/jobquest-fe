import { ProfileObject } from '../../interfaces'

import heroImage from "../../assets/Extras/Hero.png";
import "./Profile.scss";

const Profile: React.FC<ProfileObject> = ({ user }) => {
  return (
    <section className="page-profile">
      <h1 className="user-page-title">My Profile</h1>
      <h1 data-cy="username" className="user-page-title">
        {user.username}
      </h1>
      <img alt="hero" src={heroImage} className="hero-image"></img>
      <h2 className="user-xp">Current EXP:{user.xp}</h2>
      <h3 className="user-email">E-mail:{user.email}</h3>
    </section>
  );
};

export default Profile;
