import styled from "styled-components";

export const Navbar = styled.div`
  margin: 0;
  padding: 0;
  color: #eee;
  padding: 15px;
  position: -webkit-sticky; /* Safari */
  position: sticky;
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: flex-end;

  & > a {
    text-decoration: none;
  }
`;
