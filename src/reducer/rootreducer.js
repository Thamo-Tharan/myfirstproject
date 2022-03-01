const Usernamestore={user:''}
const rootreducerforuname=(state=Usernamestore,action)=>{
    switch(action.type){
        case 'login':
            return {user:action.value}
            default:
                return state
    }
}
export default rootreducerforuname