import React from "react";
import bg from "../Media/bg.png";
import styled from "styled-components";

const MainContent = () => {
  return (
    <Wrapper>
      <ImageFilter />
      <Image src={bg} alt="Kings Cayon" />
      <LegendMeta />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
`;

const Image = styled.img`
  display: block;
  width: 1920px;
  height: 450px;
  object-fit: cover;
  z-index: 1;
`;

const ImageFilter = styled.div`
  width: 100vw;
  height: 450px;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 2;
`;

const LegendMeta = styled.div`
  position: relative;
  bottom: 0px;
  width: 100vw;
  height: 400px;
  background: linear-gradient(to right, #541010, #a81b1b);
`;

export default MainContent;
