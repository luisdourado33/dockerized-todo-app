/* eslint-disable no-unused-vars */
import React from "react";
import IPage from "../../../interfaces/page";

import { Container, LeftBox, RightBox, Wrapper } from "./login.styles";

const LoginPage: React.FC<IPage> = () => {
  return (
    <Container>
      <Wrapper>
        <LeftBox>Teste I</LeftBox>
        <RightBox>Teste II</RightBox>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
