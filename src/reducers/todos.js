import {ADD_TODO, TOGGLE_TODO} from '../actions'

const todos = (state = [] , action)  => {
    console.log("inside todos", action);
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text:action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map( todo =>
                            (todo.id === action.id)
                            ? {...todo, completed: !todo.completed}
                            : todo
            )
        default:
        console.log('todos::in default', state);
            return state;
    }
}

export default todos