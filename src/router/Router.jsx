import { Favorites, Home, Profile } from '@/pages';
import JoinLayout from '@/pages/Join/JoinLayout';
import LoginLayout from '@/pages/Login/LoginLayout';
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
    element: <JoinLayout />
  },
  {
    path: '/login',
    element: <LoginLayout />
  }
];
