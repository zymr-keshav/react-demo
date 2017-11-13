/*eslint no-unused-vars:0 */

let alpha = ['a','b','c', {first: 'first'}];
let beta = ['be', 'ta', { first: 'second'}];

let more = {text:'more', date: new Date()};

const gamma = [...alpha, more];

console.log(gamma, alpha);

let todos = [{id: 1, completed: false}, {id:2, completed: true}];
console.log("initial todos", todos);
function doAction (action) {
    console.log("13 action", action);
    todos.map( (todo, index) => {
        console.log(todo, index);
        if(index === action.index) {
            console.log('17 inside if', todo);
            // todo.completed = !todo.completed;
            return Object.assign({}, todo, {
                completed: !todo.completed
            });
        }
        console.log('24', todo);
        return todo
    })
}
let action = { index: 2 };

/* trying that

- no curly bracket needed when using ternary in new line using arrow function

- can debug only when run method in console
- original object does not change
*/
const nocurly = () => {
    return todos.map( todo =>
                (todo.id === action.index)
                ? {...todo, completed: !todo.completed }
                : todo
        );
};

console.log('nocurly called', nocurly());

setTimeout( () => console.log('final todos', todos), 2000);