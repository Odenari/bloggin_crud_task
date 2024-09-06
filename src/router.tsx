import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { getBlogById, getBlogs } from './service/fetching';
import { BlogDetail } from './BlogDetail';
import { HomePage } from './HomePage';
import { createPost } from './service/posting';
import { BlogCreate } from './BlogCreate';

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: async () => await getBlogs(),
    children: [
      {
        path: 'blogs',
        element: <HomePage />,
      },
      {
        path: 'create',
        element: <BlogCreate />,
        action: ({ request }) => createPost(request),
      },
      {
        path: 'details',
        element: <BlogDetail />,
        loader: ({ request }) => getBlogById(request),
      },
    ],
  },
]);

export default myRouter;
