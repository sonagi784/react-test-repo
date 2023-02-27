import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/common/layout/Layout';
import Error from '@/pages/Error';
import Home from '@/pages/home';
import Search from '@/pages/search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'search',
        element: <Search />,
      },
    ],
  },
]);

export { router };
