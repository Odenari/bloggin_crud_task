import { useLoaderData } from 'react-router-dom';
import { Blog } from '../types';
import s from './BlogDetail.module.css';
import { Link } from 'react-router-dom';

export const BlogDetail = () => {
  const { title, body } = useLoaderData() as Blog;
  return (
    <div className={s.wrapper}>
      <h2 className='subHeading'>Here your details</h2>
      <section className={s.blogContainer}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.body}>{body}</p>
      </section>
      <nav className={s.navBtns}>
        <Link className='link' to='/blogs'>
          Back to blogs
        </Link>
        <Link className='link' to='/create'>
          Create new blog
        </Link>
        <Link className='link' to='update'>
          Update current blog
        </Link>
      </nav>
    </div>
  );
};
