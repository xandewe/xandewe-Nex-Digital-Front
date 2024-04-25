import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  LoginContainer,
  LoginForm,
  Input,
  Button,
  ErrorMessage,
} from './styled';

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log('#####################');
    console.log(data);
    console.log('#####################');
    navigate('/home');
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('username', { required: true })} placeholder="Username" />
        {errors.username && <ErrorMessage>This field is required</ErrorMessage>}
        <Input {...register('password', { required: true })} type="password" placeholder="Password" />
        {errors.password && <ErrorMessage>This field is required</ErrorMessage>}
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
