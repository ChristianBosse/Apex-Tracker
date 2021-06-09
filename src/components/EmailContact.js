import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import succesCheckmark from "../Media/checkmark.svg";

const EmailContact = () => {
  const userID = process.env.REACT_APP_EMAILJS_API_KEY;

  const [deliverSuccess, setDeliverSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("gmail", "template_ogdg209", e.target, userID).then(
      (result) => {
        console.log(result.text);
        setDeliverSuccess(true);
      },
      (error) => {
        console.log(error.text);
        setDeliverSuccess(false);
      }
    );
  };

  return (
    <Wrapper>
      <Form
        onSubmit={sendEmail}
        style={{ display: deliverSuccess === true ? "none" : "flex" }}
      >
        <Name type="text" placeholder="Name" name="name" required />
        <Email type="email" placeholder="Email Address" name="email" required />
        <Subject type="text" placeholder="Subject" name="subject" required />
        <Text
          id=""
          cols="30"
          rows="8"
          placeholder="Your message"
          name="message"
          required
        ></Text>
        <BtnWrapper>
          <SendBtn type="submit" value="Send Message"></SendBtn>
          <ClearBtn type="reset"></ClearBtn>
        </BtnWrapper>
      </Form>
      <Success style={{ display: deliverSuccess === true ? "flex" : "hidden" }}>
        <SuccessImg src={succesCheckmark} />
        <p>Your email was sent succesfully</p>
      </Success>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  width: 600px;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus {
    -webkit-text-fill-color: grey;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const Name = styled.input`
  margin: 5px 0px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: #303030;
  border: none;
  border-radius: 5px;
  color: grey;
  &:focus {
    outline: none;
  }
`;

const Email = styled.input`
  margin: 5px 0px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: #303030;
  border: none;
  border-radius: 5px;
  color: grey;
  &:focus {
    outline: none;
  }
`;

const Subject = styled.input`
  margin: 5px 0px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: #303030;
  border: none;
  border-radius: 5px;
  color: grey;
  &:focus {
    outline: none;
  }
`;

const Text = styled.textarea`
  margin: 5px 0px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: #303030;
  border: none;
  border-radius: 5px;
  color: grey;
  &:focus {
    outline: none;
  }
`;

const SendBtn = styled.input`
  width: 200px;
  margin-top: 10px;
  padding: 10px 10px;
  background: #121212;
  color: #505050;
  border: none;
  border-radius: 7px;
  font-family: "Roboto", sans-serif;
`;

const ClearBtn = styled.input`
  width: 200px;
  margin-top: 10px;
  padding: 10px 10px;
  background: #121212;
  color: #505050;
  border: none;
  border-radius: 7px;
  font-family: "Roboto", sans-serif;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Success = styled.div`
  display: none;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
`;

const SuccessImg = styled.img`
  height: 50px;
  margin-bottom: 20px;
`;

export default EmailContact;
