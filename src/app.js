import React from 'react';
import styles from './app.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home/index';
import Notes from './Notes/index';
import Article from './Article/index';
import { ReactComponent as Charloz } from './assets/charloz.svg';


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
              <li><Link className={styles.link_active} to="/about">About</Link></li>
              <li><a className={styles.link_normal} to="/notes">Notes</a></li>
              <li><a className={styles.link_normal} to="/article">Article</a></li>
              {/* <li><Link to="/about">About</Link></li>
              <li><Link to="/notes">Notes</Link></li>
              <li><Link to="/article">Article</Link></li> */}
            </ul>
          </div>
          <Route path="/about" component={Home}></Route>
          <Route path="/notes" component={Notes}></Route>
          <Route path="/article" component={Article}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
