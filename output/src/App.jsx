import { RouterProvider } from 'react-router-dom';
import GlobalStyles from '@/styles/GlobalStyles';
import { router } from './router/Router';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
