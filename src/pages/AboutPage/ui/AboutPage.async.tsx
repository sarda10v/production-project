import { lazy } from 'react';

export const AboutPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        // УДАЛИТЬ ПРИ ДЕПЛОЕ
        setTimeout(() => resolve(import('./AboutPage')), 1500);
    }),
);
