import React from "react";
import styled from "styled-components";

const EmailContact = () => {
  return (
    <Wrapper>
      <Form>
        <Name type="text" placeholder="Name" name="name" />
        <Email type="email" placeholder="Email Address" name="email" />
        <Subject type="text" placeholder="Subject" name="subject" />
        <Text
          id=""
          cols="30"
          rows="8"
          placeholder="Your message"
          name="message"
        ></Text>
        <BtnWrapper>
          <SendBtn type="submit" value="Send Message"></SendBtn>
          <ClearBtn type="reset"></ClearBtn>
        </BtnWrapper>
      </Form>
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
  background-color: #202020;
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
  background-color: #202020;
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
  background-color: #202020;
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
  background-color: #202020;
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
  background: #090909;
  color: #505050;
  border: none;
  border-radius: 7px;
  font-family: "Roboto", sans-serif;
`;

const ClearBtn = styled.input`
  width: 200px;
  margin-top: 10px;
  padding: 10px 10px;
  background: #090909;
  color: #505050;
  border: none;
  border-radius: 7px;
  font-family: "Roboto", sans-serif;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default EmailContact;
