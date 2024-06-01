import { Home } from '@/pages';
import Layout from '@/components/Layout/Layout';

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
  }
];
