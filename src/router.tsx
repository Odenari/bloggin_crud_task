import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { getBlogById, getBlogs } from './service/fetching';
import { BlogDetail } from './BlogDetail';
import { HomePage } from './HomePage';
import { createPost, deleteBlog } from './service/actions';
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
        action: async ({ request }) => {
          const result = await deleteBlog(request);
          return result;
        },
      },
      {
        path: 'create',
        element: <BlogCreate />,
        action: async ({ request }) => {
          await createPost(request);
          return { success: true };
        },
      },
      {
        path: 'details',
        element: <BlogDetail />,
        loader: ({ request }) => getBlogById(request),
      },
      {
        path: 'update:blogId',
      },
    ],
  },
]);

export default myRouter;
