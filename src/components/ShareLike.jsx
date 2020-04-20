import React, {Component} from 'react';



const ShareLike = () => (
    <div className="container">
        <FontAwesome name={props.iconName} size='5x' />
        <h3 className="container--title">{props.content}</h3>
    </div>
);

export default ShareLike;