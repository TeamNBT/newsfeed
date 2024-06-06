import { createBrowserRouter } from 'react-router-dom';
import { Favorites, Home, Profile, Signup, Signin } from '@/pages';
import Layout from '@/components/Layout';
import commonLoader from '@/components/Layout/commonLoader';
import ProfileTabs from '@/components/ProfileTabs';

const routes = [
  {
    path: '/',
    element: <Layout />,
    loader: commonLoader,
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
    path: '/signin',
    element: <Signin />
  },
  {
    path: '/signup',
    element: <Signup />
  }
];

export const router = createBrowserRouter(routes);
