import React from "react";
import styled from "styled-components";

const DeleteButton = ({ item, setReload }) => {
  const removeConfig = () => {
    fetch(`/mongo/delete/${item._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setReload((e) => !e);
  };

  return <DeleteBtn onClick={removeConfig}>Delete</DeleteBtn>;
};

const DeleteBtn = styled.button`
  border: none;
  background-color: #606060;
  color: white;
  font-family: "roboto";
  &:hover {
    background-color: #707070;
  }
`;

export default DeleteButton;
