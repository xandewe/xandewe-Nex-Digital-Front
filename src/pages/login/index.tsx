import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  LoginContainer,
  LoginForm,
  Input,
  Button,
  ErrorMessage,
} from './styled';
import { LoginRequisition, LoginData } from '../../requests';

const LoginPage: React.FC = () => {
    const [error, setError] = useState<string>('');
    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>();
    const navigate = useNavigate();

    const onSubmit = (data: LoginData) => {
        LoginRequisition(data, navigate, setError)
    };

    return (
        <LoginContainer>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('email', { required: true })} placeholder="Email" />
            <Input {...register('password', { required: true })} type="password" placeholder="Password" />
            <Button type="submit">Login</Button>
            {errors.email && <ErrorMessage>email is required</ErrorMessage>}
            {errors.password && <ErrorMessage>password This field is required</ErrorMessage>}
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </LoginForm>
        </LoginContainer>
    );
};

export default LoginPage;
