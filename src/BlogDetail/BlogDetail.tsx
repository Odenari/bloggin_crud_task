import { useLoaderData, useSubmit } from 'react-router-dom';
import { Blog } from '../types';
import s from './BlogDetail.module.css';
import { Link } from 'react-router-dom';
import { EditIcon } from './EditIcon';

export const BlogDetail = () => {
  const submit = useSubmit();
  const { title, body, id } = useLoaderData() as Blog;
  return (
    <div className={s.wrapper}>
      <h2 className='subHeading'>Here your details</h2>
      <section className={s.blogContainer}>
        <div className={s.titleCardContainer}>
          <h3 className={s.title}>{title}</h3>
          <div className={s.btnsContainer}>
            <button
              className={s.deleteBtn}
              onClick={e => {
                e.preventDefault();
                const fData = new FormData();
                fData.append('deleteId', `${id}`);
                submit(fData, { method: 'DELETE', action: '/blogs' });
              }}
            >
              &times;
            </button>
            <Link className={s.editIcon} to={`/blogs/${id}/edit`}>
              <EditIcon fill='var(--txt-clr)' width={16} height={16} />
            </Link>
          </div>
        </div>
        <p className={s.body}>{body}</p>
      </section>
      <div className={s.navBtns}>
        <Link className='link' to='/blogs'>
          Back to blogs
        </Link>
      </div>
    </div>
  );
};
