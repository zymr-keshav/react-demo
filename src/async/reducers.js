import {combineReducers} from 'redux'
import {SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS} from './actions'

function selectedSubreddit(state = 'reactjs', action) {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

const initialPostState = {
    isFetching: false,
    didInvalidate: false,
    items: []
};

function posts(state = initialPostState, action) {
//    console.log("inside posts");
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {didInvalidate: true})
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            // console.log("receive posts");
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

function postsBySubreddit(state = {}, action) {
    // console.log("postsBySubreddit", state, action.type);
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            // console.log("here in switch", action.type);
            let nextState = {}
            nextState[action.subreddit] = posts(state[action.subreddit], action)
            return Object.assign({}, state, nextState);
            // return Object.assign({}, state, {
            //     [action.subreddit]: posts(state[action.subreddit], action)
            // })
        default:
            return state
    }
}

const rootReducer = combineReducers({postsBySubreddit, selectedSubreddit})

export default rootReducer