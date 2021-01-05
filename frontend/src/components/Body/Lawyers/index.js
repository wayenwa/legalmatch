import React from 'react';
import Listing from './Listing';

export default function index(props) {
    const renderData = (data) => {
        let content = [];
        if(data.length >= 1){
            data.map((lawyer, key) =>
                content.push(<Listing data = { lawyer } index={ key }/>)
            )
        }else{
            content.push(<span>Data fetched empty.</span>)
        }
        

        return content;
    }

    return (
        <div className="container">
            { renderData(props.data) }
        </div>
    )
}
