import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Stars from './Stars';

export default function index(props) {
    return (
        <div className="card" key={props.index}>
            <div className="card__info">
                <Avatar alt={ props.data.acf.name } >{ props.data.acf.name.split(" ").map((n)=>n[0]).join("") }</Avatar>
                <div className="card__name">{ props.data.acf.name }</div>
                <div className="card__addr">{ props.data.acf.location }</div>
            </div>
            <div className="card__details">
                <div className="card__category">
                    <span className="left">{ props.data.acf.category }</span>
                    <span className="right"><Stars rate={ props.data.acf.rating }/></span>
                    <div className="clear"></div>
                </div>
                <div>
                </div>
            </div>

            <div className="clear"></div>
        </div>
    )
}
