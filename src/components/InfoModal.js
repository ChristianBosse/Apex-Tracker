import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

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
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #161616;
  color: #fff;
  display: grid;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    color: #505050;
    margin-bottom: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: bolder;
    margin: 0px 15px;
  }

  button {
    padding: 10px 24px;
    background: #090909;
    color: #505050;
    border: none;
    border-radius: 7px;
    font-family: "Roboto", sans-serif;
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
      document.body.style.overflow = "unset";
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
                  This website has been designed by Christian Bosse using React,
                  Node, JavaScript.
                </p>
                <p>
                  This website is open to anyone who wishes to use it,
                  documentation can be found on my GitHub
                </p>
                <p>You can contact me on LinkedIn or via the form below!</p>
                <button>Send</button>
              </ModalContent>
              <CloseBtn
                aria-label="Close modal"
                onClick={() =>
                  setShowModal(
                    (prev) => !prev,
                    (document.body.style.overflow = "unset")
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
