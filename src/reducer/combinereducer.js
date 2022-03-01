import {combineReducers} from 'redux'
import rootreducer from './rootreducer'
import Addcartdata from './addcartreducer'
const allReducers = () => combineReducers({
    uname: rootreducer,
    cartdata: Addcartdata,
  });
export default allReducers