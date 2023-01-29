import { eventWrapper } from "@testing-library/user-event/dist/utils";
import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 330px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #e3c9f7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 0px 0px 10px;
  padding: 10px;
`;
export const Title = styled.div`
  width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 22px;
  text-align: start;
  color: #000000;
`;
export const BookBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: scroll;
`;

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: end;
`;


