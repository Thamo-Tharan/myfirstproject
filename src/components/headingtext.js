import React, {useEffect, useState} from "react";
const Headingcomponent=(props)=>{
    return(
        <div id='heading_text'>
       <div>
           <img src='https://www.themealdb.com/images/meal-icon.png' alt='heading_img'></img>
       </div>
       <div>
           <h1>Welcome  to TheMealDB</h1>
           <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</p>
       </div>
       <div>
        <img src='https://www.themealdb.com/images/meal-icon.png' alt='heading_img'></img>
       </div>
        </div>
    )
}
export default Headingcomponent;