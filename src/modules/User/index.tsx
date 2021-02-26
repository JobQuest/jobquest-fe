// import { promises } from "fs";
// import { useEffect, useState } from "react";
// import { apiCalls } from "../../apiCalls";
import React from "react";
import "./Profile.scss";

interface UserProfile {
  username: string;
  email: string;
  xp: number;
}

interface ProfileObject {
  user: UserProfile;
}

// const userOne: UserProfile = {
//   username: "Tom",
//   email: "user@gmail.com",
//   xp: 1000,
// };

const Profile: React.FC<ProfileObject> = ({ user }) => {
  return (
    <section className="page-profile">
      <h1 className="user-page-title">{user.username}</h1>
      <h2 className="user-xp">Current EXP:{user.xp}</h2>
      <h3 className="user-email">E-mail:{user.email}</h3>
    </section>
  );
};

export default Profile;
