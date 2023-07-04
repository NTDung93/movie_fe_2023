import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/home.tsx';
import Search from './pages/search/index.tsx';
import DashBoard from './component/dashboard/index.tsx';
import Movie from './pages/movie/index.tsx';
import Actor from './component/actor/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search/:keyword",
    element: <Search />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "/dashboard/movie",
        element: <Movie />,
      },
      {
        path: "/dashboard/actor",
        element: <Actor />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
