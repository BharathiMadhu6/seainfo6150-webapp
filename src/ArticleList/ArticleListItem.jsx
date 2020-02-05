import React from 'react';
import PropTypes from "prop-types";

const ArticleItems = props => {
    return (
        < html>
            <head> 
                <title> Articles </title>
            </head>
            <body> 
                <div> 
                <section> 
                    <h3> {props.article.title} </h3>
                    <p>  {props.article.shortText} </p>
                         {props.article.pubDate}
                    <button onClick = {() => alert(props.article.slug)}>
                            show article slug
                    </button>
                </section>
                </div>
            </body>  
        </html>
    );
};

export default ArticleItems;
