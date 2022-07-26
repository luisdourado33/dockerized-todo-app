import React from "react";
import styled from "styled-components";

import { MenuItemProps } from "../../../interfaces/menu";

const Item = styled.a`
  text-decoration: none;
  padding-inline: 15px;
  padding-block: 7.5px;
  transition: background-color 0.5s;
  color: ${(props) => props.theme.colors.lightGray};
  text-align: left;
  width: auto;
  font-size: auto;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: #000;
  }
`;

const ItemMenu: React.FC<MenuItemProps> = ({ label, destination }) => {
  return <Item href={destination}>{label}</Item>;
};

export default ItemMenu;
