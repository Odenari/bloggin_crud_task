export type Blog = {
  id?: number;
  userId: number;
  title: string;
  body: string;
};

export type ActionResult = { success: true; id: string };

export type BlogDetailsParams = {
  blogId: string;
};