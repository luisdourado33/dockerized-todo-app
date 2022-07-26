import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 100%;
  display: flex;
`;
export const NavMenu = styled.aside`
  background-color: ${(props) => props.theme.colors.secondaryAlt};
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 100%;
  transition: all 1s;
  border-width: 1px solid transparent;
  justify-content: space-between;

  .items {
    display: flex;
    flex-direction: column;
  }
`;
export const Content = styled.main`
  background-color: ${(props) => props.theme.colors.secondaryAlt};
  margin: 15px;
  border-radius: 15px;
  padding: 15px;
  height: 90%;
`;
