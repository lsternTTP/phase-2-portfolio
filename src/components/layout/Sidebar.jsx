import './Sidebar.css';
import {Link} from 'react-router-dom';

export default function Sidebar(props) {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/portfolio">My Portfolio</Link></li>
      </ul>
    </nav>
  )
}