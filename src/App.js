import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import logo from './images/Logo.svg';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import './App.css';
export default function App() {
  return (
    <Router>
      <div className ="wrapper">
        <header id="top" className="header">
          <div className="menu">
            <img id="logo" src= {logo} alt="Portfolio logo"/>
            <nav className ="navbar">
              <ul>
                <li>
                  <NavLink exact activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active"Link to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active"Link to="/projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active"Link to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <footer>
          <a href="#top" class="back-to">Back to top</a>
          <p class="copyright">© 2021 by Mansy Ralhan. All rights reserved.</p>
        </footer>
      </div>
    </Router>  
  );
}

