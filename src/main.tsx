import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import myRouter from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={myRouter} />
  </StrictMode>
);
