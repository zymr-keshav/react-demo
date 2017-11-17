import fetch from 'isomorphic-fetch'

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function selectSubreddit(subreddit) {
    return {type: SELECT_SUBREDDIT, subreddit}
}


function requestPosts(subreddit) {
    return {type: REQUEST_POSTS, subreddit}
}

function receivePosts(subreddit, json) {
    console.log("receive", json);
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

export function invalidateSubreddit(subreddit) {
    return {type: INVALIDATE_SUBREDDIT, subreddit}
}

export function fetchPosts(subreddit) {
    return dispatch => {
        dispatch(requestPosts(subreddit))
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => { console.log("fetch response"); return response.json()}, error => console.log('An error occured.', error))
        .then(json => dispatch(receivePosts(subreddit, json)))
    }
}

function shouldFetchPosts(state, subreddit) {
    // console.log('shouldFetchPosts', state);
    const posts = state.postsBySubreddit[subreddit]
    // console.log('posts', posts);
    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(subreddit) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            // console.log('inside if');
            // Dispatch a thunk from thunk!
            return dispatch(fetchPosts(subreddit))
        } else {
            // Let the calling code know there's nothing to wait for.
            // console.log('inside else');
            return Promise.resolve()
        }
    }
}