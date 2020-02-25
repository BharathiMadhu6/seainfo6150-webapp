import React from "react";
import styles from "./ArticleListItem.module.css";
import SlugButton from "./SlugButton";
import ArticleImage from "./ArticleImage";

const ArticleListItem = props => {
  return (
    <html> 
      <head> 
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
       <div className={styles.container}>
      <ArticleImage url = {props.article.image} title = {props.article.title} />
      <p>{props.article.shortText}</p>
      <time className={styles.pubDate} dateTime={props.article.pubYear}>{props.article.pubDate}</time>
      <SlugButton slug={props.article.slug} buttonText={props.article.author} />
    </div>
    </html>

  );
};

export default ArticleListItem;
