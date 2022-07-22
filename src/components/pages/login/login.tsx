/* eslint-disable no-unused-vars */
import React from "react";
import IPage from "../../../interfaces/page";

import { Container, LeftBox, RightBox, Wrapper } from "./login.styles";

import TextHeading from "../../atoms/text-heading/text-heading";
import TextDescription from "../../atoms/text-description/text-description";
import InputWithLabel from "../../atoms/input-with-label/input-with-label";
import CustomButton from "../../atoms/custom-button";

const LoginPage: React.FC<IPage> = () => {
  return (
    <Container>
      <Wrapper>
        <LeftBox>
          <TextHeading>Log in</TextHeading>
          <TextDescription>
            Welcome back! Please enter your details.
          </TextDescription>

          <form>
            <InputWithLabel
              label="Email"
              placeholder="Enter your email"
              type="email"
            />

            <InputWithLabel
              label="Password"
              placeholder="********"
              type="password"
            />
            <CustomButton>Sign In</CustomButton>
          </form>
        </LeftBox>
        <RightBox>b</RightBox>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
