import GlobalStyles from './styles/GlobalStyles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterInfo } from './router/Router';

const router = createBrowserRouter(RouterInfo);

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
