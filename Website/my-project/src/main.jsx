import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home';
import Calculator from './routes/Calculator';
import PythonProjects from './routes/PythonProjects';
import Astar from './routes/PythonProjects/AstarCode';
import CsharpProjects from './routes/CsharpProjects';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='text-black'>hello world</div>,
  },
  {
    path: "/main",
    element: < Home />,
  },
  {
    path: "/python",
    element: < PythonProjects />,
  },
  {
    path: "/python/astar",
    element: < Astar />,
  },
  {
    path: "/csharp",
    element: < CsharpProjects />,
  },
  {
    path: "/calculator",
    element: < Calculator />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <RouterProvider router={router} />
  </StrictMode>,
);
