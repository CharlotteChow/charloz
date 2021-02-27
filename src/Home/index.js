import React from 'react';
import styles from './index.css';
// import { ReactComponent as Wechat } from './../assets/wechat.svg';
import { ReactComponent as Ins } from './../assets/ins.svg';
import { ReactComponent as Dribbble } from './../assets/dribbble.svg';
import { ReactComponent as Github } from './../assets/github.svg';

function Home() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.side_nav}>
          <p>Little Things Matter.</p>
        </div>
        <div className={styles.about}>
          <div className={styles.about_pic}>
            <h1>ABOUT</h1>
            <img src={require('./../assets/BG.png')} alt="bg"/>
          </div>
          <div className={styles.about_content}>
            <div className={styles.about_content_details}>
              <h1>✨ Hi, I’m Charlotte.</h1>
              <p><b>A UI/UX Designer</b> who dedicated to discovering creative ideas, building connections between users and products and narrowing the gap between design and code.</p>
              <ul className={styles.socialMedia}>
                {/* <li><a href=""><Wechat /></a></li> */}
                <li><a href="https://www.instagram.com/charloz.sp/"><Ins /></a></li>
                <li><a href="https://dribbble.com/Charloz"><Dribbble /></a></li>
                <li><a href="https://github.com/CharlotteChow"><Github /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
