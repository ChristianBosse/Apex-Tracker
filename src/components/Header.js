import React, { useState } from "react";
import Nav from "./Nav";
import styled from "styled-components";
import InfoModal from "./InfoModal";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
    document.body.style.overflowY = "clip";
  };
  const linkedInBtn = () => {
    window.location.href = "https://www.linkedin.com/in/christianbosse-/";
  };

  return (
    <>
      <Wrapper>
        <LoginButton />
        <LogoutButton />
        <QuestionMark
          width="16"
          height="16"
          viewBox="0 0 16 16"
          onClick={openModal}
        >
          <path
            fill="#444444"
            d="M9 11h-3c0-3 1.6-4 2.7-4.6 0.4-0.2 0.7-0.4 0.9-0.6 0.5-0.5 0.3-1.2 0.2-1.4-0.3-0.7-1-1.4-2.3-1.4-2.1 0-2.5 1.9-2.5 2.3l-3-0.4c0.2-1.7 1.7-4.9 5.5-4.9 2.3 0 4.3 1.3 5.1 3.2 0.7 1.7 0.4 3.5-0.8 4.7-0.5 0.5-1.1 0.8-1.6 1.1-0.9 0.5-1.2 1-1.2 2z"
          ></path>
          <path
            fill="#444444"
            d="M9.5 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"
          ></path>
        </QuestionMark>
        <InfoModal showModal={showModal} setShowModal={setShowModal} />
        <LinkedIn
          x="0px"
          y="0px"
          viewBox="0 0 260.366 260.366"
          onClick={linkedInBtn}
        >
          <path
            d="M34.703,0.183C15.582,0.183,0.014,15.748,0,34.884C0,54.02,15.568,69.588,34.703,69.588
		c19.128,0,34.688-15.568,34.688-34.704C69.391,15.75,53.83,0.183,34.703,0.183z"
          />
          <path
            d="M60.748,83.531H8.654c-2.478,0-4.488,2.009-4.488,4.489v167.675c0,2.479,2.01,4.488,4.488,4.488h52.093
		c2.479,0,4.489-2.01,4.489-4.488V88.02C65.237,85.539,63.227,83.531,60.748,83.531z"
          />
          <path
            d="M193.924,81.557c-19.064,0-35.817,5.805-46.04,15.271V88.02c0-2.48-2.01-4.489-4.489-4.489H93.424
		c-2.479,0-4.489,2.009-4.489,4.489v167.675c0,2.479,2.01,4.488,4.489,4.488h52.044c2.479,0,4.489-2.01,4.489-4.488v-82.957
		c0-23.802,4.378-38.555,26.227-38.555c21.526,0.026,23.137,15.846,23.137,39.977v81.535c0,2.479,2.01,4.488,4.49,4.488h52.068
		c2.478,0,4.488-2.01,4.488-4.488v-91.977C260.366,125.465,252.814,81.557,193.924,81.557z"
          />
        </LinkedIn>
      </Wrapper>
      <Nav />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 40px;
  max-width: 100vw;
  background-color: #161616;
`;

const QuestionMark = styled.svg`
  height: 20px;
  margin: 0px 20px;
  path {
    fill: #505050;
  }
  &:hover {
    path {
      fill: #d3d3d3;
    }
  }
`;

const LinkedIn = styled.svg`
  height: 20px;
  margin: 0px 30px 0px 20px;
  path {
    fill: #505050;
  }
  &:hover {
    path {
      fill: #d3d3d3;
    }
  }
`;

export default Header;
