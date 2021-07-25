import React from 'react';
import styles from './app.css'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home/index';
import Notes from './Notes/index';
import Article from './Article/index';
import { ReactComponent as Charloz } from './assets/charloz.svg';
import NotesDetails from './NotesDetails/index'


function App() {
  return (
    <div className={styles.App}>
      <Router>
      <div className={styles.container}> 
        <div className={styles.topNav}>
          <div className={styles.nav_logo}>
            <a href="https://charloz.com" className={styles.logo_img}><img src={require('./assets/logoDark.png')} alt="logo"/></a>
            <Charloz className={styles.nav_logo_name}/>
          </div>
          <ul className={styles.nav_link}>
            <li><Link className={styles.link_active} to="/" >About</Link></li>
            <li><Link className={styles.link_normal} to="/notes" >Notes</Link></li>
            <li><Link className={styles.link_normal} to="/articles" >Articles</Link></li>
          </ul>
        </div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/notes" component={Notes}></Route>
            <Route exact path="/articles" component={Article}></Route>
            <Route path="/notes/details/:id" component={NotesDetails}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
