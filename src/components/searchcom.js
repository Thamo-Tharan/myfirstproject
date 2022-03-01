const Searchcomponent=(props)=>{
    return(
<div className="wrap">
   <div className="search">
      <input type="text" className="searchTerm" placeholder="What are you looking for?"></input>
      <button type="submit" className="searchButton"><img id='searc_icon' src='https://img.icons8.com/search' alt='search'></img>
        <i className="fa fa-search"></i>
     </button>
   </div>
</div>
    )
}
export default Searchcomponent;