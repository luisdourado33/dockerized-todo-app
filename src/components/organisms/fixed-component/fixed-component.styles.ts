import styled from "styled-components";

export const Navbar = styled.div`
  margin: 0;
  padding: 0;
  background-color: #333;
  color: #eee;
  padding: 15px;
  position: -webkit-sticky; /* Safari */
  position: sticky;
`;

export const Menu = styled.nav`
  & > a {
    text-decoration: none;
  }
`;
