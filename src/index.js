import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
            <div>
                <h1>Hello!</h1>
                {unreadMessages.length > 0 && <h2> You Have {unreadMessages.length} unread messages.</h2>}
            </div>
    );
}

const messages = ['React', 'Fwd:React', 'Re:React', 'Re:Fwd:React', 'Fwd:Re:React'];


function ListItem(props) {
    return <li>{props.value}</li>;
}
function MessageItem(props) {
    return <li>{props.value}</li>;
}
function NumberList(props) {
  const {numbers, messages} = props;
  const listItems = numbers.map((number) =>
   <ListItem key={number.toString()} value={number} />
  );

  return (
    <nav>
        <ul>
            { messages.map((msg,idx) =>
                <MessageItem key={idx} value={msg} />
            )}
        </ul>
        <ul>{listItems}</ul>
    </nav>
  );
}

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
    <NumberList numbers={numbers} messages={messages}/>,
    document.getElementById('list')
);

ReactDOM.render (
    <Mailbox unreadMessages={messages} />,
    document.getElementById('mail')
);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


