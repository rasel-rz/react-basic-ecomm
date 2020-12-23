import { combineReducers } from 'redux';
import categoryReducer from './category';
import counterReducer from './counter';

const rootReducers = combineReducers({
    counter: counterReducer,
    categories: categoryReducer,
})

export default rootReducers;