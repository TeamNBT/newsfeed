import { createBrowserRouter } from 'react-router-dom';
import { authLoader, commonLoader } from '@/loader';
import { Favorites, Home, Profile, Signup, Signin, Detail } from '@/pages';
import Layout from '@/components/Layout';
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
      },
      {
        path: '/detail/:id',
        element: <Detail />
      }
    ]
  },
  {
    path: '/signin',
    loader: authLoader,
    element: <Signin />
  },
  {
    path: '/signup',
    loader: authLoader,
    element: <Signup />
  }
];

export const router = createBrowserRouter(routes);
