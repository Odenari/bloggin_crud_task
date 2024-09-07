import { Blog } from '../types';
import { BASE_PATH } from './fetching';

export type ActionResult = { success: true; id: string };

export const createPost = async (req: Request): Promise<Blog> => {
  try {
    const fData = await req.formData();
    const { title, body, userId } = Object.fromEntries(fData.entries());

    const response = await fetch(`${BASE_PATH}/posts`, {
      method: 'POST',
      body: JSON.stringify({
        userId,
        title,
        body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    return response.json();
  } catch (err) {
    throw {
      err,
      message: 'Post creating failed',
    };
  }
};

export const deleteBlog = async (req: Request): Promise<ActionResult> => {
  const deleteId = (await req.formData()).get('deleteId');
  try {
    await fetch(`${BASE_PATH}/posts/${deleteId}`, {
      method: req.method,
    });
    return { success: true, id: `${deleteId}` };
  } catch (err) {
    throw {
      err,
      message: 'Post deletion failed',
    };
  }
};
