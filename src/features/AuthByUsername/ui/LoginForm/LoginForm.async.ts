import { lazy, FC } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () => new Promise((resolve) => {
        // @ts-ignore
        // УДАЛИТЬ ПРИ ДЕПЛОЕ
        setTimeout(() => resolve(import('./LoginForm')), 1500);
    }),
);
