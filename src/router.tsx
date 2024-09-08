import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { getBlogById, getBlogs } from './service/fetching';
import { BlogDetail } from './BlogDetail';
import { HomePage } from './HomePage';
import { createPost, deleteBlog, updatePostById } from './service/actions';
import { BlogCreate } from './BlogCreate';
import { BlogDetailsParams } from './types';
import { BlogEdit } from './BlogEdit';

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
        path: 'blogs/:blogId',
        element: <BlogDetail />,
        loader: ({ params }) => {
          const p = params as BlogDetailsParams;
          return getBlogById(p.blogId);
        },
      },
      {
        path: 'blogs/:blogId/edit',
        element: <BlogEdit />,
        loader: ({ params }) => {
          const p = params as BlogDetailsParams;
          return getBlogById(p.blogId);
        },
        action: async ({ request }) => {
          await updatePostById(request);
          return { success: true };
        },
      },
    ],
  },
]);

export default myRouter;
