import Sidebar from '../layout/Sidebar';
import '../layout/PageLayout.css';

export default function HomePage() {
  return (
    <div className="full-layout">
      <Sidebar></Sidebar>

      <section className="current-page">
        <h2>Welcome!</h2>
        <p>My name is Bob and I am a web developer.</p>
        <p>I learned how to code through the NYPL's Project Code program!</p>
        <p>See my About page to learn more about me.</p>
      </section>
    </div>
  )
};