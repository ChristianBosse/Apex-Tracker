import React from "react";
import styled from "styled-components";

const DeleteButton = ({ item }) => {
  //   console.log(item._id);
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
  };

  return <DeleteBtn onClick={removeConfig}>Delete</DeleteBtn>;
};

const DeleteBtn = styled.button`
  border: none;
  background-color: #606060;
  color: white;
  font-family: "roboto";
`;

export default DeleteButton;
