import * as actionType from '../actions/actions';

const initialState = {card : []}

export default function getPostsReducer(state = initialState, action){
    switch(action.type){
        case(actionType.GET_POSTS):
                return Object.assign({}, state, {card: action.posts})
        default:
            return state
    }
}


