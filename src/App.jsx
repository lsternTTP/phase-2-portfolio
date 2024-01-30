import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/routes/Home';
import About from './components/routes/About';
import ProjectPortfolio from './components/routes/ProjectPortfolio';

const router = createBrowserRouter([
  { path: '/phase-2-portfolio/', element: <HomePage></HomePage> },
  { path: '/phase-2-portfolio/about', element: <About></About>},
  { path: '/phase-2-portfolio/portfolio', element: <ProjectPortfolio></ProjectPortfolio>}
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
