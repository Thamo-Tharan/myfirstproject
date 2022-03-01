import Headercom from './header';
import {useSelector, useDispatch} from 'react-redux'
import Loginicon from '../images/login_icon.png'
const Cart=(props)=>{
    const unamefornext=useSelector(state=>state.uname.user);
    const cartalldata=useSelector(state=>state.cartdata.cartdatauser);
    const dispatch=useDispatch();
    return(
        <div>
            <header id="header">
    <nav className="navbar navbar-inverse" role="banner">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <img src="https://www.themealdb.com/images/logo-small.png" alt="logo" id="welcome_icon" onClick={()=> props.history.push("/home")}></img>
                <img src={Loginicon} alt="logo" id='home_logo'></img>
            </div>
            <div className="collapse navbar-collapse navbar-right">
                <ul className="nav navbar-nav">
                    <li className="active"><a onClick={()=> props.history.push("/home")}>Home</a></li>
                    <li><a href="">API</a></li>
                    <li><a href="">Forum</a></li>
					<li>
						<div className="search">
                            <form role="form" action="../browse.php">
								<input type="text" name="s" className="search-form" placeholder=" Search"></input>
                            </form>
                        </div>
					</li>
				</ul>
            </div>
        </div>
    </nav>
</header>
        <p id="username_home_login_cart">{unamefornext}</p>
        {cartalldata.length===0? <div><h2>Your Cart is Empty</h2></div> : 
        <div id="cart_items_img">
             <h2>Your Recent Items</h2>
             <div id="sub_carts">
            {
            cartalldata.map((currentValue,index)=>{
                    return(
                        <div>
                           <img id={currentValue.strMeal} src={currentValue.strMealThumb} alt={currentValue.strMeal}></img>
                           <p>{currentValue.strMeal}</p>
                        </div>
                    )
                })
        }
        </div>
        <button id="clear_cart" onClick={()=>dispatch({type:'clear',data:[]})}>Clear All</button>
        </div>
        }
        </div>
    )
}
export default Cart