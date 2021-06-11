import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();

  return (
    <>
      <div>{JSON.stringify(user, null, 2)}</div>
      <img src={user.picture} />
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.updated_at}</p>
    </>
  );
};

export default Profile;
