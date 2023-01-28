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
  background-color: #ffffff;
`;

export const Margin = styled.div`
  margin-top: 20px;
`;

export const ImgBox = styled.div`
  min-width: 322px;
  width: 80%;
  height: 276px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    height: 276px;
  }
`;

export const InfoContainer = styled.div`
  width: 80%;
  min-width: 322px;
  
  margin-top: 20px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 10px;
`;

export const Title = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.08em;
    color: #000000;
  }
`;

export const Author = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: start;
  margin-top: 10px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0.08em;
    color: #787a7f;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #e5e5e5;
  align-items: flex-end;
  height: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: start;
    letter-spacing: 0.08em;
    color: #000000;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 80%;
    height: 40px;
    background: #ac7bd2;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.08em;

    color: #ffffff;
  }
`;
