import { useEffect, useState } from "react";
import "./Profile.scss";

interface Profile {
  name: string;
  email: string;
  xp: number;
}

const userOne: Profile = {
  name: "Tom",
  email: "user@gmail.com",
  xp: 1000,
};

const Profile = () => {
  const [user, setUser] = useState<object>({});

  return (
    <section className="page-profile">
      <h1 className="user-page-title">{userOne.name}</h1>
      <h2 className="user-xp">Current EXP:{userOne.xp}</h2>
      <h3 className="user-email">E-mail:{userOne.email}</h3>
    </section>
  );
};

export default Profile;
