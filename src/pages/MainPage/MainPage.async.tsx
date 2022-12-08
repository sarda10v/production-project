import { lazy } from "react";
export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      // УДАЛИТЬ ПРИ ДЕПЛОЕ
      setTimeout(() => resolve(import("./MainPage")), 1500);
    })
);
