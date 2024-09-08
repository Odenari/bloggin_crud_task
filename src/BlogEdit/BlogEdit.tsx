import { Form, useActionData, useLoaderData } from 'react-router-dom';
import { ActionResult, Blog } from '../types';
import s from './BlogEdit.module.css';
import { Link } from 'react-router-dom';

export const BlogEdit = () => {
  const { id, title, body, userId } = useLoaderData() as Blog;
  const actionResult = useActionData() as ActionResult;
  return (
    <div className={s.editPageContainer}>
      <h2 className='subHeading'>
        You can update title and post content below
      </h2>
      <Form
        className={s.createForm}
        method='PATCH'
        action='/blogs/:blogId/edit'
        onSubmit={evt => {
          console.log(evt);
        }}
      >
        <input hidden name='id' defaultValue={id} />
        <input hidden name='userId' defaultValue={userId} />
        <input
          className={s.textInput}
          name='title'
          type='text'
          placeholder='Title here...'
          required
          minLength={2}
          maxLength={100}
          defaultValue={title}
        />
        <textarea
          className={s.textArea}
          name='body'
          placeholder='Content here...'
          required
          defaultValue={body}
          minLength={2}
          maxLength={500}
        />
        <div className={s.formBtnsContainer}>
          <button className='standardButton' type='submit'>
            Update
          </button>
        </div>
        <p data-visible={actionResult?.success} className={s.gratulation}>
          Your blog was updated!
        </p>
        <Link className='link' to='/blogs'>
          Back to blogs
        </Link>
      </Form>
    </div>
  );
};
