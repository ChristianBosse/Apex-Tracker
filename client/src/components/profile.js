import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import defaultPic from "../Media/default.jpg";
import Loading from "./Loading";

const Profile = () => {
  //using Authentication method to show user is signed in
  const { user, isAuthenticated } = useAuth0();
  //Getting user Profile from database
  const [userProfile, setUserProfile] = useState([]);
  //Set the page to is loaded to render
  const [isLoaded, setIsLoaded] = useState(false);
  //tell the page to show username update.
  const [update, setUpdate] = useState(false);
  //sets the new username
  const [username, setUsername] = useState("");
  //re-render the page on username change.
  const [reload, setReload] = useState(false);

  //send username update to mongodb using backend API
  const sendUpdate = async () => {
    await fetch(`/mongo/username/${user.email}/${username}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setUpdate(false);
    setReload((e) => !e);
  };
  //get user detail from mongodb
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
  }, [reload]);
  //delete user saved randomizer config from mongodb
  const deleteConfig = (item) => {
    console.log(item);
    fetch(`/mongo/delete/${item}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  //used to show the box to update username
  const updateUsername = () => {
    setUpdate(true);
  };

  return (
    <>
      {isLoaded && isAuthenticated ? (
        <div>
          {userProfile && user.email !== undefined ? (
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
                <CustomWrap>
                  <CustomText>Legend</CustomText>
                  <CustomText>Primary</CustomText>
                  <CustomText>Secondary</CustomText>
                </CustomWrap>
                <ConfigText>Randomizer saved configuration.</ConfigText>
                {userProfile.map((e) => {
                  return (
                    <Wrap>
                      <LegendName>{e.Legend}</LegendName>
                      <Primary>{e.Primary}</Primary>
                      <Secondary>{e.Secondary}</Secondary>
                      <DeleteBtn onClick={deleteConfig}>Delete</DeleteBtn>
                    </Wrap>
                  );
                })}
              </UserConfig>
            </Wrapper>
          ) : (
            <div>Profile not found</div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

//style are below.
const ConfigText = styled.p`
  position: relative;
  color: lightgray;
  font-family: "roboto";
  font-size: 20px;
  text-align: center;
`;

const DeleteBtn = styled.button`
  border: none;
  background-color: #606060;
  color: white;
  font-family: "roboto";
`;

const CustomWrap = styled.div`
  height: 30px;
  width: 400px;
  background-color: #353535;
  border-radius: 10px;
  position: relative;
  left: 100px;
  top: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
`;

const CustomText = styled.p`
  color: lightgray;
  font-family: "roboto";
  margin: 0px 25px;
`;

const Wrap = styled.div`
  height: 30px;
  width: 400px;
  background-color: #353535;
  border-radius: 10px;
  position: relative;
  left: 100px;
  top: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
`;

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

const UserConfig = styled.div`
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  height: 500px;
  width: 600px;
  position: relative;
  background-color: #252525;
  border-radius: 10px;
  bottom: 330px;
  left: 1250px;
`;

const LegendName = styled.p`
  color: lightgray;
  font-family: "roboto";
  margin: 0px 10px;
`;

const Primary = styled.p`
  color: lightgray;
  font-family: "roboto";
  margin: 0px 10px;
`;

const Secondary = styled.p`
  color: lightgray;
  font-family: "roboto";
  margin: 0px 10px;
`;

export default Profile;
