import React, { useState, useEffect } from "react";
import styles from "./News.module.scss";

type NewsProps = {
  id: number;
  url: string;
  title: string;
  time_ago: string;
  user: string;
};

export default function News() {
  const [news, setNews] = useState([]);
  // 어떤 작업 끝.

  useEffect(() => {
    fetch("https://api.hnpwa.com/v0/news.json")
      .then((res) => res.json())
      .then((json) => setNews(json));
  }, []);

  const render = () => {
    console.log("news: ", news);
    return news.map((item: NewsProps) => {
      return (
        <div key={item.id}>
          <div>
            <a className={styles.newsTitle} href={item.url}>
              {item.title}
            </a>
            <span> / {item.time_ago}</span>
            <span> / ID: {item.user}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <h1>News App</h1>
      <div>{render()}</div>
    </>
  );
}
