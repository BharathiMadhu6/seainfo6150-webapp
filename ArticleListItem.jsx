import React from 'react';
import PropTypes from "prop-types";

const ArticleItems = props => {
    return (
        <div> 
        <section>
            <header>  </header>
            <title> <b> props.articles.title </b> </title>
            <p> props.articles.shortText </p> <br/>
            <p> props.articles.pubDate </p> 
            
            <button onClick={()=> alert("")}> 
                {props.user.name} show article slug
            </button>
        </section>
        </div>
    )
}

export default ArticleItems;