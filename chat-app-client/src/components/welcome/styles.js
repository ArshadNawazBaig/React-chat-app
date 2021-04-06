import styled from "styled-components";

export const WelcomeWrapper = styled.div`
  background-color: #333;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
  text-align: center;
  form {
    input,
    button {
      border-radius: 0;
    }
  }
`;

export const Heading = styled.div`
  font-size: 25px;
  color: #ffffff;
  font-weight: 900;
  border-bottom: 5px solid #ffffff;
  display: inline-block;
`;
