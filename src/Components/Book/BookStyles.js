import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 250px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding:5px;
`;
export const Upside = styled.div`
  img {
    width: 170px;
    height: 170px;
  }
`;

export const Middleside = styled.div`
  width: 170px;
  height: 40px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #000000;
    max-width: 170px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Lowside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  p {
    width: 90px;
    font-family: "Roboto";
    font-style: bold;
    font-weight: 400;
    font-size: 20px;
    text-align: start;
    color: #000000;
  }
  button {
    width: 80px;
    height: 30px;
    background: #6f4292;
    border: 1px solid #ffffff;
    border-radius: 6px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #ffffff;
  }
`;
