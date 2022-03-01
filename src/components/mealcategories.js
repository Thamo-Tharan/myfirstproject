import React, { useEffect, useState, Component} from "react";
import axios from "axios";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Listviewcom from './listview'
import Headercom from './header';
import Headingcom from './headingtext'
import Searchcom from './searchcom'
import Logout from '../images/log_out.png'
import Cart from '../images/cart.png'
import {useSelector, useDispatch,shallowEqual} from 'react-redux'
const Mealcat=(props)=>{
    const [melcat, setmealcat]=useState({categories:[],loading:true,error:''})
    const [mellist, setmeallist]=useState({meals:[],loading:true,error:''})
    const [titledata,settitledata]=useState('');
    const [popupopen,setpopupopen]=useState('false')
    const usernameva=useSelector(state=>state.uname.user)
    const cartalldata=useSelector(state=>state.cartdata.cartdatauser);
    useEffect(() => {
        axios
        .get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res =>{
            let catall=[]
            catall=res.data;
            setmealcat({
                loading:false,
                categories:catall.categories,
                error:''
            })
            console.log(melcat)
        })
        .catch(err =>{
            setmealcat({
                loading:false,
                categories:[],
                error:err.message
            })
        })
    },[])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
    const onclickapi=(e)=> {
        settitledata(e.currentTarget.id)
        setpopupopen('true')
        axios
        .get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+e.currentTarget.id)
        .then(res =>{
            let catall=[]
            catall=res.data;
            setmeallist({
                loading:false,
                meals:catall.meals,
                error:''
            })
            console.log(mellist)
        })
        .catch(err =>{
            setmealcat({
                loading:false,
                meals:[],
                error:err.message
            })
        })
        console.log(titledata);
    }
    return(
        <div>
            <Headercom/> <Headingcom/> <Searchcom/>
        <h1>Meal Categories</h1>
        <div id='meal_cat'>
            {melcat.loading && <p>Loading</p>}
            {melcat.error && <p>{melcat.error}</p>}
        {
            melcat.categories && <Carousel responsive={responsive} showDots={true} dotListClass="custom-dot-list-style">
            {
                melcat.categories.map((currentValue,index)=>{
                    return(
                        <div>
                           <img id={currentValue.strCategory} src={currentValue.strCategoryThumb} alt={currentValue.strCategory} onClick={onclickapi}></img>
                           <p>{currentValue.strCategory}</p>
                        </div>
                    )
                })
            }
            </Carousel>
        }
        </div>
        {popupopen==='true'? <Listviewcom data={mellist} titledatavalue={titledata} popupclose={setpopupopen}/> : null}
        <img src={Logout} alt="logo" id='home_logout' onClick={()=>props.history.push('/')}></img>
        <p id="username_home_login">{usernameva}</p>
        <img src={Cart} alt='cart_alt' id="cart_image_head" onClick={()=>props.history.push("/cart")}/>
        <p id="cart_count">{cartalldata.length}</p>
        </div>
    )
}
export default Mealcat;