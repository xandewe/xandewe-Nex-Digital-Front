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
import { LoginRequisition } from '../../requests';

const LoginPage: React.FC = () => {
    const [error, setError] = useState<string>('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        LoginRequisition(data, setError)
        navigate('/home');
    };

    return (
        <LoginContainer>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('email', { required: true })} placeholder="Email" />
            {errors.username && <ErrorMessage>This field is required</ErrorMessage>}
            <Input {...register('password', { required: true })} type="password" placeholder="Password" />
            {errors.password && <ErrorMessage>This field is required</ErrorMessage>}
            <Button type="submit">Login</Button>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </LoginForm>
        </LoginContainer>
    );
};

export default LoginPage;
