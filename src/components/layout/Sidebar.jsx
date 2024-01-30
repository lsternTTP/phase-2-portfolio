import './Sidebar.css';
import {Link} from 'react-router-dom';

export default function Sidebar(props) {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/phase-2-portfolio/">Home</Link></li>
        <li><Link to="/phase-2-portfolio/about">About Me</Link></li>
        <li><Link to="/phase-2-portfolio/portfolio">My Portfolio</Link></li>
      </ul>
    </nav>
  )
}