import { Blog } from '../types';

export const BASE_PATH = 'https://jsonplaceholder.typicode.com' as const;

export const getBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await fetch(`${BASE_PATH}/posts`);
    return response.json();
  } catch (err) {
    console.error(err);
    throw { err };
  }
};

export const getBlogById = async (req: Request): Promise<Blog> => {
  const blogId = new URL(req.url).searchParams.get('blogId');
  try {
    const response = await fetch(`${BASE_PATH}/posts/${blogId}`);
    return response.json();
  } catch (err) {
    console.error(err);
    throw { err };
  }
};
