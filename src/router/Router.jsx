import { Favorites, Home, Profile, Detail } from '@/pages';
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
      },
      {
        path: '/detail',
        element: <Detail />
      }
    ]
  }
];
