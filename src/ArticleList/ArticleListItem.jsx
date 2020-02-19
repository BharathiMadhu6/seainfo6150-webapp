import React from "react";
import styles from "./ArticleListItem.module.css";
import SlugButton from "./SlugButton";
import ArticleImage from "./ArticleImage";

const ArticleListItem = props => {
  return (
    <div className={styles.container}>
      <ArticleImage url = {props.article.image} title = {props.article.title} />
      <p>{props.article.shortText}</p>
      <time className={styles.pubDate} dateTime={props.article.pubYear}>{props.article.pubDate}</time>
      <SlugButton slug={props.article.slug} buttonText={props.article.author} />
    </div>
  );
};

export default ArticleListItem;
