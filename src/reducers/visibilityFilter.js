import { SET_VISIBILITY_FILTER } from '../actions'

const visibilityFilter = (state= 'SHOW_ALL', action) => {
    console.log('inside visibilityFilter', action);
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            console.log('visibilityFilter::in default', state);
            return state
    }
}

export default visibilityFilter