import { useEffect, useState } from "react";
import "./Profile.scss";
import Grid from "../../ui/Grid/Grid";

interface Profile {
  name: string;
  email: string;
  xp: number;
}

const Profile = () => {
  const [user, setUser] = useState<object>({});

  const userOne: Profile = {
    name: "Tom",
    email: "user@gmail.com",
    xp: 1000,
  };
  return (
    <section
      className="page-profile"
      style={
        {
          // border: "1px solid black",
          // marginTop: "auto",
          // marginBottom: "auto",
          // padding: "1em",
        }
      }
    >
      <h1
        style={{
          textAlign: "center",
          border: "1px solid black",
        }}
      >
        {userOne.name}
      </h1>
    </section>
  );
};

export default Profile;
