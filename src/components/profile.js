import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import defaultPic from "../Media/default.jpg";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [userProfile, setUserProfile] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [update, setUpdate] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const mongo = async () => {
      await fetch(`/mongo/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserProfile(data.data);
          setIsLoaded(true);
        });
    };
    mongo();
  }, []);

  const sendUpdate = async () => {
    await fetch(`/mongo/username/${user.email}/${username}`, {
      method: "patch",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const updateUsername = () => {
    setUpdate(true);
  };

  console.log(userProfile);

  return (
    <>
      {isLoaded && isAuthenticated ? (
        <Wrapper>
          <Head />
          <UserInfo>
            {userProfile.ProfilePic ? (
              <UserPicture src={userProfile.profilePic} />
            ) : (
              <UserPicture src={defaultPic} />
            )}

            <div>
              {update ? (
                <>
                  <NewUsername
                    type="text"
                    placeholder="New Username"
                    onChange={(e) => setUsername(e.target.value)}
                    autoFocus
                  ></NewUsername>
                  <SaveUsername onClick={sendUpdate}>
                    Save Username
                  </SaveUsername>
                </>
              ) : (
                <>
                  <UserName>{userProfile[0].Username}</UserName>
                  <SetUsername onClick={updateUsername}>
                    Update Username
                  </SetUsername>
                </>
              )}
            </div>

            <UserEmail>{userProfile[0].email}</UserEmail>
          </UserInfo>
          <UserConfig>
            <LegendName></LegendName>
            <Primary></Primary>
            <Secondary></Secondary>
          </UserConfig>
        </Wrapper>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

const NewUsername = styled.input`
  border: none;
  border-radius: 10px;
  background-color: #252525;
  width: 300px;
  padding: 10px 10px;
  font-family: "roboto";
  font-size: 20px;
  color: lightgray;
  margin-bottom: 20px;
  position: relative;
  left: 800px;
  bottom: 70px;
  width: 300px;

  ::placeholder {
    color: lightgray;
  }
`;

const SaveUsername = styled.button`
  border: none;
  background-color: #202020;
  padding: 10px 15px;
  color: white;
  font-size: 15px;
  font-family: "roboto";
  position: relative;
  top: -25px;
  left: 666px;
  margin-bottom: 59px;
`;

const SetUsername = styled.button`
  border: none;
  background-color: #202020;
  padding: 10px 15px;
  color: white;
  font-size: 15px;
  font-family: "roboto";
  position: relative;
  top: -26px;
  left: 650px;
  margin-bottom: 59px;
`;

const Head = styled.div`
  height: 30px;
  background-color: #272727;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  max-width: 100vw;
`;

const Wrapper = styled.div`
  height: 700px;
  background-color: #404040;
  max-width: 100vw;
`;

const UserInfo = styled.div``;

const UserPicture = styled.img`
  height: 250px;
  border: solid 5px #202020;
  border-radius: 50%;
  position: relative;
  top: 150px;
  left: 300px;
`;

const UserName = styled.p`
  border-radius: 10px;
  background-color: #252525;
  width: 300px;
  padding: 10px 10px;
  font-family: "roboto";
  font-size: 20px;
  color: lightgray;
  margin-bottom: 20px;
  position: relative;
  left: 800px;
  bottom: 70px;
  display: inline-block;
`;

const UserEmail = styled.p`
  border-radius: 10px;
  background-color: #252525;
  width: 300px;
  padding: 10px 10px;
  font-family: "roboto";
  font-size: 20px;
  color: lightgray;
  margin-right: 0;
  position: relative;
  left: 800px;
  bottom: 20px;
  display: inline-block;
`;

const UserConfig = styled.div``;

const LegendName = styled.p``;

const Primary = styled.p``;

const Secondary = styled.p``;

export default Profile;
