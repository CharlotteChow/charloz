import React from 'react';
import styles from './index.css';
// import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";

const notesList = [
  {
    id: 1,
    number: '01',
    title: '故事：材质、结构、风格和银幕剧作的原理',
    timestamp: '2020.02.09 Mon · 6 min read',
    details: '人类对故事的胃口是不可餍足的。设想在地球上的普通一日，有多少故事在以各种形式传送着：翻阅的散文书页、表演的戏剧、放映的电影、源源不断的电视喜剧和正剧、二十四小时的报刊和广播新闻、孩子们的睡前故事、酒吧吹牛、网上闲聊。故事不仅是人类最多产的艺术形式，而且和人类的一切活动——工作、玩乐、吃饭、锻炼——争夺着人们每一刻醒着的时间。我们讲述和倾听故事的时间可以和睡觉的时间相提并论——即使在睡着以后我们还会做梦。为什么？我们人生如此之多的时间为什么会在故事中度过？因为，正如评论家肯尼斯·伯克所言，故事是人生必需的设备。'
  },
  {
    id: 2,
    number: '02',
    title: '故事：材质、结构、风格和银幕剧作的原理222',
    timestamp: '2020.02.09 Mon · 6 min read',
    details: '人类对故事的胃口是不可餍足的。设想在地球上的普通一日，有多少故事在以各种形式传送着：翻阅的散文书页、表演的戏剧、放映的电影、源源不断的电视喜剧和正剧、二十四小时的报刊和广播新闻、孩子们的睡前故事、酒吧吹牛、网上闲聊。故事不仅是人类最多产的艺术形式，而且和人类的一切活动——工作、玩乐、吃饭、锻炼——争夺着人们每一刻醒着的时间。我们讲述和倾听故事的时间可以和睡觉的时间相提并论——即使在睡着以后我们还会做梦。为什么？我们人生如此之多的时间为什么会在故事中度过？因为，正如评论家肯尼斯·伯克所言，故事是人生必需的设备。'
  }
];

function Notes() {
  function routerTo(){
    console.log("111")
    // this.props.history.push({pathname: `/Detail/${v.id}`, state: {data: v}})
  };
  return (
    <div className={styles.App}>
      {/* <Router> */}
      <div className={styles.container}>
        <div className={styles.side_nav}>
            <p>Little Things Matter.</p>
          </div>
          <div className={styles.about}>
            <div className={styles.about_pic}>
              <h1>NOTES</h1>
            </div>
            <div className={styles.about_content}>
              <div className={styles.about_content_details}>
                {
                  notesList.map((item,index) => (
                    <div className={styles.article_list} key={item.id}>
                      <label>{item.number}</label>
                      <div className={styles.article_list_items}>
                        <a onClick={e => routerTo()} href={'/notes/details/'+item.id}>{item.title}</a>
                        <p>{item.timestamp}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
      </div>
      {/* </Router> */}
    </div>
  )}

export default Notes;
