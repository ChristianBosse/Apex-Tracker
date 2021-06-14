import React, { useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import styled from "styled-components";
import { css } from "@emotion/react";

//override normal Loader css
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  top: 20px;
`;

const Loading = () => {
  //used to set the loader to Loading on the page.
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#FFFFFF");

  return (
    <Wrapper>
      <BarLoader color={color} css={override} size={40} loading={loading} />
    </Wrapper>
  );
};

//style are below.
const Wrapper = styled.div`
  height: 200px;
  max-width: 100vw;
  background-color: #303030;
`;

export default Loading;
