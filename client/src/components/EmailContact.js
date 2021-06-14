import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import succesCheckmark from "../Media/checkmark.svg";

//This file connect to EmailJS so people can send email from the site.
const EmailContact = () => {
  //EmailJS API key is located into the .env file.
  const userID = process.env.REACT_APP_EMAILJS_API_KEY;

  const [deliverSuccess, setDeliverSuccess] = useState(false);

  //code the send email following EmailJS template.
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

//All style are below.
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
  background-color: #3d3d3d;
  border: none;
  border-radius: 5px;
  color: lightgray;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: lightgray;
  }
`;

const Email = styled.input`
  margin: 5px 0px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: #3d3d3d;
  border: none;
  border-radius: 5px;
  color: lightgray;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: lightgray;
  }
`;

const Subject = styled.input`
  margin: 5px 0px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: #3d3d3d;
  border: none;
  border-radius: 5px;
  color: lightgray;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: lightgray;
  }
`;

const Text = styled.textarea`
  margin: 5px 0px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: #3d3d3d;
  border: none;
  border-radius: 5px;
  color: lightgray;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: lightgray;
  }
`;

const SendBtn = styled.input`
  width: 200px;
  margin-top: 10px;
  padding: 10px 10px;
  background: #3d3d3d;
  color: lightgray;
  border: none;
  border-radius: 7px;
  font-family: "Roboto", sans-serif;
`;

const ClearBtn = styled.input`
  width: 200px;
  margin-top: 10px;
  padding: 10px 10px;
  background: #3d3d3d;
  color: lightgray;
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
