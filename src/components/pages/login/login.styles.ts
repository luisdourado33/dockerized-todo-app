import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  place-content: center;
  place-items: center;
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;

  @media (max-width: 414px) {
    place-items: start;
    place-content: start;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > div {
    padding: 15px;
  }

  @media (max-width: 414px) {
    flex-direction: column;
    justify-content: stretch;
  }
`;

export const LeftBox = styled.div`
  width: 50%;
  background-color: #123123;
  color: #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  @media (max-width: 414px) {
    width: 100%;
  }
`;

export const RightBox = styled.div`
  width: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 414px) {
    width: 100%;
  }
`;
