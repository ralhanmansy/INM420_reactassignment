import {
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import '../App.css';
import proimg from '../images/Project.svg';
import Project1 from './projects/Project1.js';
import Project2 from './projects/Project2.js';
export default function Projects() {
  return (
    <div className="Projects">
      <img src={proimg} className="Project-img" alt="project" />
      <h1>VIEW MY PROJECTS</h1>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to= "/projects/project1">Project 1</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/projects/project2">Project 2</NavLink>
        </li>
      </ul>
       {/* The Projects page has its own <Switch> with more routes
          that build on the /projects URL path. */}
      <Switch>
        <Route path="/projects/project1">
          <Project1 />
        </Route>
        <Route path="/projects/project2">
          <Project2 />
        </Route>
      </Switch>
    </div>
  );
}
