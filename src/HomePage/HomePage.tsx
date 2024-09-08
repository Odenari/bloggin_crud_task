import { useEffect, useState } from 'react';
import { Blog } from '../types';
import s from './HomePage.module.css';
import {
  Link,
  useActionData,
  useOutletContext,
  useSubmit,
} from 'react-router-dom';
import { ActionResult } from '../types';
import { EditIcon } from '../BlogDetail/EditIcon';

export const PAGINATION_STEP = 10;

export const HomePage = () => {
  const submit = useSubmit();
  const [{ blogs }, setData] = useState<{ blogs: Blog[] }>(useOutletContext());
  const [offsetBounds, setOffsetBounds] = useState({
    from: 0,
    to: PAGINATION_STEP,
  });

  const actionResult = useActionData() as ActionResult;
  useEffect(() => {
    if (actionResult && actionResult.success) {
      setData(prevData => {
        const filtered = prevData.blogs.filter(
          blog => blog.id !== Number(actionResult.id)
        );
        return { blogs: filtered };
      });
    }
  }, [actionResult]);

  return (
    <>
      <header className={s.headerContainer}>
        <h2 className='subHeading'>Browse through existing blogs</h2>
        <Link className='link' to='/create'>
          or create your own
        </Link>
      </header>
      {blogs.length ? (
        <main className={s.cardsContainer}>
          {blogs.slice(offsetBounds.from, offsetBounds.to).map(blog => (
            <Link to={`/blogs/${blog.id}`} key={blog.id}>
              <section className={s.blogCard}>
                <div className={s.titleCardContainer}>
                  <h3 className={s.cardTitle}>{blog.title}</h3>
                  <div className={s.btnsContainer}>
                    <button
                      className={s.deleteBtn}
                      onClick={e => {
                        e.preventDefault();
                        const fData = new FormData();
                        fData.append('deleteId', `${blog.id}`);
                        submit(fData, { method: 'DELETE' });
                      }}
                    >
                      &times;
                    </button>
                    <Link className={s.editIcon} to={`/blogs/${blog.id}/edit`}>
                      <EditIcon fill='var(--txt-clr)' width={16} height={16} />
                    </Link>
                  </div>
                </div>
                <p className={s.cardContent}>{blog.body}</p>
              </section>
            </Link>
          ))}
          <div className={s.paginationBtnsContainer}>
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
        <div className={s.fallBackContainer}>
          <h2>There is no blogs yet. You can create your own </h2>
          <Link className='link' to='/create'>
            or create your own
          </Link>
        </div>
      )}
    </>
  );
};
