import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // УДАЛИТЬ ПРИ ДЕПЛОЕ
    setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
