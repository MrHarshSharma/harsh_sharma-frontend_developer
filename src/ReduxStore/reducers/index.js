import {combineReducers} from 'redux';
import setData from './setData';
import setPageNumber from './setPageNumber';

const rootReducer = combineReducers({
    setData,
    setPageNumber
})

export default rootReducer;
