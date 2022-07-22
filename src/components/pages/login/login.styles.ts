import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  width: 100%;
  height: 100%;
  place-content: center;
  place-items: center;

  @media (max-width: 414px) {
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 1136px) {
    flex-direction: column;
    place-content: center;
    place-items: center;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.light};
  padding: 100px;

  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;

  @media (max-width: 414px) {
    width: 100%;
    height: fit-content;
    border-radius: 15px;
    place-content: center;
    place-items: center;
  }
`;

export const RightBox = styled.div`
  width: 500px;
  height: 500px;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 15px;

  @media (max-width: 414px) {
    display: none;
  }
`;
