import { Blog } from '../types';
import { BASE_PATH } from './fetching';

export const createPost = async (req: Request) => {
  const b = req.body;
  console.log(req);
  console.log('IN CREATE POST', b);

  // await fetch(`${BASE_PATH}/posts`, {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     userId,
  //     title,
  //     body,
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })
  //   .then(response => response.json())
  //   .then(json => console.log(json));
};
