
import { Home } from '@/pages';
import Layout from '@/components/Layout';
import JoinLayout from '@/pages/Join/JoinLayout'
import LoginLayout from '@/pages/Login/LoginLayout'

export const RouterInfo = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: 'Join',
    element: <JoinLayout />,
    children: [
      {
        index: true,
        element: <JoinLayout />
      }
    ]
  },
  {
    path: 'Login',
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <LoginLayout />
      }
    ]
  }
];
