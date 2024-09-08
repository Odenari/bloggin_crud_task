import { Blog } from '../types';

export const BASE_PATH = 'https://jsonplaceholder.typicode.com' as const;

export const getBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await fetch(`${BASE_PATH}/posts`);
    return response.json();
  } catch (err) {
    console.error(err);
    throw { err, message: 'Failed to get all blogs' };
  }
};

export const getBlogById = async (blogId: string): Promise<Blog> => {
  try {
    const response = await fetch(`${BASE_PATH}/posts/${blogId}`);
    return response.json();
  } catch (err) {
    console.error(err);
    throw { err, message: 'Failed to get blog by ID' };
  }
};
