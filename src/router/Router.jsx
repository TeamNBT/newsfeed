import { Home, Detail } from '@/pages';
import Layout from '@/components/Layout';

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
        path: '/detail',
        element: <Detail />
      }
    ]
  }
];
