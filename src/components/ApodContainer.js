import React from "react";
import Picture from './Picture';
import Title from './Title';
import Date from './Date';
import Explanation from './Explanation';

export default function ApodContainer(props){
    
    if(props.data === undefined){
        return null;
    }
    console.log(props.data);
    return(
        <div className="apod-container">
            <Picture url={props.data.url}/>
            <Title title={props.data.title}/>
            <Date date={props.data.date}/>
            <Explanation explanation={props.data.explanation}/>
        </div>
    );
}