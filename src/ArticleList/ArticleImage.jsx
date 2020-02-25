import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleImage.module.css";

const ArticleImage = props => {
    return (
        <div> 
            
                 <img className = {styles.image} src = {props.url._url} alt ="image" border="10"/>
                 <h3 className = {styles.title}> {props.title} </h3>
            
        </div>    
    );
};

ArticleImage.propTypes = {
    url : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
};

export default ArticleImage;