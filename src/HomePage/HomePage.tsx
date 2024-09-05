import isEmpty from 'lodash/isEmpty';
import { useEffect, useState } from 'react';
import { Blog } from '../types';
import { PAGINATION_STEP } from '../App';
import s from './HomePage.module.css';

type Props = { offsetBy: number };

export const HomePage = ({ offsetBy }: Props) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => setBlogs(json));
  }, []);

  const [offsetBounds, setOffsetBounds] = useState({
    from: 0,
    to: offsetBy,
  });

  useEffect(() => {}, [offsetBounds]);
  console.log(offsetBounds);

  return (
    <>
      <h2 className={s.subHeading}>
        Browse through existing blogs or create you own
      </h2>
      {!isEmpty(blogs) ? (
        <main className={s.cardsContainer}>
          {blogs.slice(offsetBounds.from, offsetBounds.to).map(blog => (
            <a>
              <section className={s.blogCard} key={blog.id}>
                <h3 className={s.cardTitle}>{blog.title}</h3>
                <p className={s.cardContent}>{blog.body}</p>
              </section>
            </a>
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
            <a>CREATE BLOG TODO</a>
          </h2>
        </div>
      )}
    </>
  );
};
