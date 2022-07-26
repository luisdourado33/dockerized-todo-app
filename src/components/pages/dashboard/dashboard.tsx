import React from "react";

import { MenuItemProps } from "../../../interfaces/menu";
import ItemMenu from "../../atoms/item-menu/item-menu";

import { Container, Content, NavMenu } from "./dashboard.styles";

const ITEMS_MENU: Array<MenuItemProps> = [
  { label: "Home", destination: "/" },
  { label: "Tasks", destination: "/tasks" },
];

const Dashboard: React.FC<any> = () => {
  const renderItems = ITEMS_MENU.map((item, index) => {
    return (
      <ItemMenu label={item.label} destination={item.destination} key={index} />
    );
  });
  return (
    <Container>
      <NavMenu>
        <div className="items">{renderItems}</div>
        <button>Sign Out</button>
      </NavMenu>
      <Content>Lorem Ipsum sit amet dolor</Content>
    </Container>
  );
};

export default Dashboard;
