import Sidebar from '../layout/Sidebar';
import '../layout/PageLayout.css';

export default function ProjectPortfolio() {
  return (
    <div className="full-layout">
      <Sidebar></Sidebar>

      <section className="current-page">
        <h2>My Portfolio</h2>
        <div className="gallery">
          <a href="https://project-2-library-catalog.leahstern.repl.co">
            <img src="https://github.com/lsternTTP/phase-2-portfolio/blob/main/src/images/library.jpg?raw=true" alt="numerous books on a wooden bookshelf"></img>
          </a>
          <a href="https://project-1-todo-list.leahstern.repl.co">
            <img src="https://github.com/lsternTTP/phase-2-portfolio/blob/main/src/images/todo.jpg?raw=true" alt="scrabble tiles spelling todo above a yellow post-it note"></img>
          </a>
        </div>
      </section>
    </div>
  );
};