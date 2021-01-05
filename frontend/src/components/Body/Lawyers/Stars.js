import React from 'react';
import { Star, StarBorder } from '@material-ui/icons';

export default function index(props) {
    const renderStars = (rate) => {
        console.log(rate)
        if(rate == 5){
            return (
                <div><Star/><Star/><Star/><Star/><Star/></div>
            )
        }else if(rate == 4){
            return (
                <div><Star/><Star/><Star/><Star/><StarBorder/></div>
            )
        }else if(rate == 3){
            return (
                <div><Star/><Star/><Star/><StarBorder/><StarBorder/></div>
            )
        }else if(rate == 2){
            return (
                <div><Star/><Star/><StarBorder/><StarBorder/><StarBorder/></div>
            )
        }else if(rate == 1){
            return (
                <div><Star/><StarBorder/><StarBorder/><StarBorder/><StarBorder/></div>
            )
        }else{
            return (
                <div><StarBorder/><StarBorder/><StarBorder/><StarBorder/><StarBorder/></div>
            )
        }
        
    }
    return (
        <div>
            { renderStars(props.rate) }
        </div>
    )
}
