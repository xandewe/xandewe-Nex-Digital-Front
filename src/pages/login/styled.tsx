import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e6eff2;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  color: black;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-bottom: 5px;
`;
