import isEmpty from 'lodash/isEmpty';
import { useState } from 'react';
import { Blog } from '../types';
import s from './HomePage.module.css';
import { Link, useOutletContext } from 'react-router-dom';

export const PAGINATION_STEP = 10;

export const HomePage = () => {
  const { blogs } = useOutletContext() as { blogs: Blog[] };

  // console.log(blogs);
  const [offsetBounds, setOffsetBounds] = useState({
    from: 0,
    to: PAGINATION_STEP,
  });

  return (
    <>
      <header className={s.headerContainer}>
        <h2 className='subHeading'>Browse through existing blogs</h2>
        <Link className='link' to='/create'>
          or create your own
        </Link>
      </header>
      {!isEmpty(blogs) ? (
        <main className={s.cardsContainer}>
          {blogs.slice(offsetBounds.from, offsetBounds.to).map(blog => (
            <Link to={`/details/?blogId=${blog.id}`} key={blog.id}>
              <section className={s.blogCard}>
                <h3 className={s.cardTitle}>{blog.title}</h3>
                <p className={s.cardContent}>{blog.body}</p>
              </section>
            </Link>
          ))}
          <div className={s.buttonsContainer}>
            <button
              className='standardButton'
              disabled={offsetBounds.from <= 0}
              onClick={() =>
                setOffsetBounds(({ from, to }) => ({
                  from: from - PAGINATION_STEP,
                  to: to - PAGINATION_STEP,
                }))
              }
            >
              Prev
            </button>
            <button
              className='standardButton'
              disabled={offsetBounds.to >= blogs.length}
              onClick={() =>
                setOffsetBounds(({ from, to }) => ({
                  from: from + PAGINATION_STEP,
                  to: to + PAGINATION_STEP,
                }))
              }
            >
              Next
            </button>
          </div>
        </main>
      ) : (
        <div>
          <h2>
            There is no blogs yet. You can create your own{' '}
            <a>CREATE BLOG //TODO </a>
          </h2>
        </div>
      )}
    </>
  );
};
