import Sidebar from '../layout/Sidebar';
import '../layout/PageLayout.css';

export default function About() {
  return (
    <div className="full-layout">
      <Sidebar></Sidebar>

      <section className="current-page">
        <h2>About Me</h2>
        <p>I am not a real person. This is just an example page!</p>
        <p>I might talk about where I'm from and why I love web development.</p>
        <p>But I can't because I am not a real person!</p>

        <img src="https://github.com/lsternTTP/phase-2-portfolio/blob/main/src/images/smile.jpg?raw=true" alt="a hand holding a yellow ballon with a smiley face on it"></img>
      </section>
    </div>
  )
};