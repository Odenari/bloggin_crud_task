import { useEffect } from 'react';
import './App.css';
import './Variables.css';
import { Blog } from './types';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';

export function App() {
  const blogs = useLoaderData() as Blog[];
  const nav = useNavigate();

  useEffect(() => {
    if (blogs) {
      nav('blogs');
    }
  }, []);

  return (
    <>
      <h1 className='mainTitle'>The reading</h1>
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
