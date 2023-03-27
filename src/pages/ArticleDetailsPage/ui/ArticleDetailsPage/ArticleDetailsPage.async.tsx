import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // УДАЛИТЬ ПРИ ДЕПЛОЕ
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
