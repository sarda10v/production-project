import { lazy } from 'react';

export const ProfilePageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        // УДАЛИТЬ ПРИ ДЕПЛОЕ
        setTimeout(() => resolve(import('./ProfilePage')), 1500);
    }),
);
