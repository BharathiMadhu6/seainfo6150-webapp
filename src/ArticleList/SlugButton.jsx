import React from 'react';
import PropTypes from "prop-types";
import styles from './SlugButton.module.css';
import ArticleListItem from './ArticleList';

const SlugButton = props => {
    return (
        <button onClick ={() => alert(props.slugButton.slug)}>
            {props.slugButton.author}
        </button>
);
};
    

export default SlugButton;
