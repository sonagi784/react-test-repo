import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/common/layout/Layout';
import Error from '../pages/Error'
import Main from '../pages/main';
import Search from '../pages/search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'main',
        element: <Main />,
      },
      {
        path: 'search',
        element: <Search />,
      },
    ],
  }
]);

export { router }