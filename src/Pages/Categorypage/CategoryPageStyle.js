import styled from "styled-components";

export const ScreenContainer = styled.div`
  width: 100%;
  min-width: 400px;
  min-height: 100vh;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #e5e5e5;
`;

export const Margin = styled.div`
  margin-top: 20px;
`;

export const Title = styled.div`
  width: 80%;
  background-color: #e3c9f7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 10px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    text-align: center;
  }
`;

export const BookContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  
`;
