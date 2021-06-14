import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import EmailContact from "./EmailContact";

//All the style for the modal are below.
//Background is to blur the background.
//Modal Wrapper is the background of the actual Modal.
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #252525;
  color: #fff;
  display: grid;
  position: relative;
  z-index: 1;
  border-radius: 20px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    color: lightgray;
    margin-bottom: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: bolder;
    margin: 0px 15px;
  }
`;

const CloseBtn = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 0;
`;

const InfoModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 350,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      document.body.style.overflowY = "unset";
    }
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <p>
                  This Full-stack application was designed and built by
                  Christian Bosse using React, Node, Mongo & Express.
                </p>
                <p>
                  This website is open to anyone who wishes to use it,
                  documentation can be found on my GitHub
                </p>
                <p>You can contact me on LinkedIn or via the form below!</p>
                <EmailContact />
              </ModalContent>
              <CloseBtn
                aria-label="Close modal"
                onClick={() =>
                  setShowModal(
                    (prev) => !prev,
                    (document.body.style.overflowY = "unset")
                  )
                }
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default InfoModal;
