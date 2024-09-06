import s from './BlogCreate.module.css';
export const BlogCreate = () => {
  return (
    <div>
      <h2 className='subHeading'>
        Be creative! Enter title and post content below
      </h2>
      <form className={s.createForm}>
        <input
          className={s.textInput}
          name='title'
          type='text'
          placeholder='Title here...'
        />
        <input
          className={s.textInput}
          name='body'
          type='text'
          placeholder='Content here...'
        />
        <div className={s.formBtnsContainer}>
          <button type='submit'>Create</button>
          <button type='reset'>Reset</button>
        </div>
      </form>
    </div>
  );
};
