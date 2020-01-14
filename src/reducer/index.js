import {combineReducers} from 'redux';
import getPostsReducer from './reducer';


const rootReducer = combineReducers({
 posts: getPostsReducer
});

export default rootReducer;