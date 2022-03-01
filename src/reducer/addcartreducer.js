const Addcartarryadata={cartdatauser:[]}
const Addcartdata=(state=Addcartarryadata,action)=>{
    switch(action.type){
        case 'Addcart':
            return {
                ...state,
                cartdatauser:state.cartdatauser.concat(action.data)
            }
            case 'clear':
                return {cartdatauser:action.data}
            default:
                return state
    }
}
export default Addcartdata