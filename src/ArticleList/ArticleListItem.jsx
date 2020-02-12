import React from 'react';
import PropTypes from 'prop-types';
import SlugButton from './SlugButton'
import ArticleList from './ArticleList';
import styles from "./ArticleListItem.module.css";

const ArticleListItem = props =>  {
    return (
            <html> 
                <head> 
                    <title> ArticleListItems </title>
                </head>
                <body> 
                    <div> 
                    <section> 
                        <h1> {props.article.title} </h1>
                        <p>  {props.article.shortText} </p>
                        <time dateTime = {props.article.pubYear}> {props.article.pubDate} </time>  
                     
                           <SlugButton slugButton = {props.article}> </SlugButton>

                    </section>
                    </div>
                </body>
            </html>
    );
};


export default ArticleListItem;
