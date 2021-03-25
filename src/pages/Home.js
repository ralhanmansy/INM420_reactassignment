import '../App.css';
import home from '../images/Home.svg';

export default function Home() {
  return (
    <div className="Home">
      <img src={home} className="Home-img" alt="home" />
      <h1>Hi! I AM MANSY RALHAN</h1>
      <p>Welcome to my site</p>
     </div>
  );
}