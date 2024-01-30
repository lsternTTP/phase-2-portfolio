import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/routes/Home';
import About from './components/routes/About';
import ProjectPortfolio from './components/routes/ProjectPortfolio';

const router = createBrowserRouter([
  { path: '/', element: <HomePage></HomePage> },
  { path: '/about', element: <About></About>},
  { path: '/portfolio', element: <ProjectPortfolio></ProjectPortfolio>}
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
