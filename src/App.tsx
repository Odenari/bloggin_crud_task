import './App.css';
import './Variables.css';
import { Blog } from './types';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function App() {
  const blogs = useLoaderData() as Blog[];

  return (
    <>
      <Link to='/blogs'>
        <h1 className='mainTitle'>The reading</h1>
      </Link>
      <hr />
      <div className='mainWrapper'>
        <Outlet
          context={{
            blogs,
          }}
        />
      </div>
    </>
  );
}

export default App;
