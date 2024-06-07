import { createBrowserRouter } from 'react-router-dom';
import { authLoader, commonLoader } from '@/loader';
import detailLoader from '@/loader/detailLoader';
import homeLoader from '@/loader/homeLoader';
import {
  Favorites,
  Home,
  Profile,
  Signup,
  Signin,
  Detail,
  Editor,
  EditProfile,
  NotFound
} from '@/pages';
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
        loader: homeLoader,
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
        path: '/profile/modify',
        element: <EditProfile />
      },
      {
        path: '/detail/:id',
        loader: detailLoader,
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
  },
  {
    path: '/editor/new',
    element: <Editor />
  },
  {
    path: '/editor/:id',
    element: <Editor />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export const router = createBrowserRouter(routes);
