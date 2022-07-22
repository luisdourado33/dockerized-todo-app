import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 5px;
  border: 0px solid transparent;
  border-radius: 5px;
`;

const CustomButton: React.FC<any> = ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);
export default CustomButton;
