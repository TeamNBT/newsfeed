import { Favorites, Home, Profile } from '@/pages';
import Join from '@/pages/join/Join';
import Login from '@/pages/login/Login';
import Layout from '@/components/Layout';
import ProfileTabs from '@/components/ProfileTabs';

export const RouterInfo = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/profile',
        element: <ProfileTabs />,
        children: [
          {
            index: true,
            element: <Profile />
          },
          {
            path: '/profile/favorites',
            element: <Favorites />
          }
        ]
      }
    ]
  },
  {
    path: '/join',
    element: <Join />
  },
  {
    path: '/login',
    element: <Login />
  }
];
