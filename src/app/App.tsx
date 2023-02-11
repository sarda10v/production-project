import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useEffect, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  //   useEffect(() => {
  //     throw new Error();
  //   }, []); - для проброса ошибки

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button onClick={() => setIsOpen(true)}>Opened</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem earum
          labore facilis provident ipsa dolores dolorem iusto magni quas? Sint
          molestias rem tempore expedita beatae doloribus provident doloremque
          totam illum.
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
