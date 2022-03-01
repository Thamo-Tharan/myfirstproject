import Carousel from 'react-multi-carousel';
import React, { useEffect, useState, Component} from "react";
import 'react-multi-carousel/lib/styles.css';
import './listviewpopup.css'
import Popucloseimg from '../images/close.png'
import Cartsucess from '../images/suc.png'
import { version } from 'react-dom';
import {useSelector, useDispatch} from 'react-redux'
const Listcomponent=(props)=>{
    const[addcart,setaddcart]=useState([]);
    const[timed,settimed]=useState(false);
    const cartalldata=useSelector(state=>state.cartdata.cartdatauser);
    const cartdatadispatch=useDispatch();
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 760, min: 0 },
            items: 1
        }
    };
    useEffect(()=>{
        setTimeout(()=>{
      settimed(false)
        },900)
    })
    function addcarthandle(e){
        e.preventDefault()
        let imagevalue=e.currentTarget.parentNode.querySelector('img');
        let dataupdatevaer={strMeal:imagevalue.getAttribute('id'),strMealThumb:imagevalue.getAttribute('src')}
        setaddcart(
            (arry1)=> arry1.concat(dataupdatevaer)
        )
        settimed(true);
        cartdatadispatch({type:"Addcart",data:dataupdatevaer})
    //console.log(addcart);
    console.log(cartalldata);
    }
    return(
        <div id='cat_popup'>
            <div id="heading_popup_div">
                <img id="popup_close_img" src={Popucloseimg} alt="popup_close_img" onClick={()=> props.popupclose('false')}/>
                <h1>{props.titledatavalue} Categories</h1>
                <marquee><h2 id="sub_head">Enjoy Your Food ! Have a Great Day !</h2></marquee>
                </div>
            <div id='sub_popup'>
<div id='meallist'>
    {props.data.loading && <p>Loading</p>}
    {props.data.error && <p>{props.data.error}</p>}
    {
            props.data.meals &&   props.data.meals.map((currentValue,index)=>{
                    return(
                        <div>
                           <img id={currentValue.strMeal} src={currentValue.strMealThumb} alt={currentValue.strMeal}></img>
                           <p>{currentValue.strMeal}</p>
                           <button id="add_btn" onClick={addcarthandle}>Add to Cart</button>
                        </div>
                    )
                })
        }
</div>
</div>
{addcart.length!=0 && timed===true ? 
<div id="cart_popup_suc">
    <h2 className='cart-popup-suc-h2'>Your Item Added to Cart</h2>
    <img src={Cartsucess} alt='cart_suc' id='suc_pop_img'/>
    </div>
 : null}
</div>
    )
}
export default Listcomponent;