import React from "react";
import Picture from './Picture';
import Title from './Title';
import Date from './Date';
import Explanation from './Explanation';

export default function ApodContainer(props){
    return(
        <div className="apod-container">
            <Picture url={props.url}/>
            <Title title={props.title}/>
            <Date date={props.date}/>
            <Explanation explanation={props.explanation}/>
        </div>
    );
}