import { Form, useActionData, useOutletContext } from 'react-router-dom';
import s from './BlogCreate.module.css';
import { Blog } from '../types';
import { Link } from 'react-router-dom';
export const BlogCreate = () => {
  const { blogs } = useOutletContext() as { blogs: Blog[] };
  const actionResult = useActionData() as { success: boolean };

  return (
    <div>
      <h2 className='subHeading'>
        Be creative! Enter title and post content below
      </h2>
      <Form className={s.createForm} method='POST' action='/create'>
        <input hidden name='userId' defaultValue={blogs[0].userId} />
        <input
          className={s.textInput}
          name='title'
          type='text'
          placeholder='Title here...'
          required
          minLength={2}
          maxLength={100}
        />
        <input
          className={s.textInput}
          name='body'
          type='text'
          placeholder='Content here...'
          required
          minLength={2}
          maxLength={1000}
        />
        <div className={s.formBtnsContainer}>
          <button className='standardButton' type='reset'>
            Reset
          </button>
          <button className='standardButton' type='submit'>
            Create
          </button>
        </div>
        <p data-visible={actionResult?.success} className={s.gratulation}>
          Your blog was created!
        </p>
        <Link className='link' to='/blogs'>
          Back to blogs
        </Link>
      </Form>
    </div>
  );
};
