import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const SaveLegend = ({ legend, firstFirearm, secondFirearm }) => {
  //using Auth0 to show if player is online
  const { user } = useAuth0();
  //Adding randomized data to user profile in mongodb
  const AddLegend = async () => {
    await fetch(
      `/mongo/add/${user.email}/${legend}/${firstFirearm.Firearm}/${secondFirearm.Firearm}`,
      {
        method: "post",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <SaveLegendBtn onClick={AddLegend}>Save Legend</SaveLegendBtn>
    </>
  );
};

//style are below
const SaveLegendBtn = styled.button`
  position: absolute;
  top: 700px;
  color: white;
  background-color: #202020;
  border: none;
  padding: 10px 30px;
  font-family: "roboto";
  font-size: 23px;
  left: 1100px;

  &:focus {
    border: none;
  }
`;

export default SaveLegend;
