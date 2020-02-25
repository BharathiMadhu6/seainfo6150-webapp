import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from "./ArticleListItem";
import styles from "./ArticleList.module.css";

const ArticleList = props => {
  return (
    <html> 
    <head> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </head>
    <div> 
    <ul className={styles.container} >
      {props.articles.map(article => (
        <li key={article.slug}>
          <ArticleListItem article={article} />
        </li>
      ))}
    </ul>
    </div>
    </html>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;