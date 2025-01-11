import { createBrowserRouter } from 'react-router-dom';
import Main from "../pages/Main.tsx";

const RouterConfig: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <>error</>,
  },
]);

export default RouterConfig;
