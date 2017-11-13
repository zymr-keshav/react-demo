import React , { Component } from 'react';

const messages = ['React', 'Fwd:React', 'Re:React', 'Re:Fwd:React', 'Fwd:Re:React'];
const numbers = [1, 2, 3, 4, 5];

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
            <div>
                <h1>Hello!</h1>
                {unreadMessages.length > 0 && <h2> You Have {unreadMessages.length} unread messages.</h2>}
                <ul>
                  { unreadMessages.map((msg, idx) =>
                    <MessageItem key={idx} value={msg} />
                  )}
                </ul>
            </div>
    );
}

function ListItem(props) {
    return <li>{props.value}</li>;
}
function MessageItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
  const {numbers} = props;
  return (
    <nav>
      <ul>
        { numbers.map((number) =>
          <ListItem key={number.toString()} value={number} />
        )}
      </ul>
    </nav>
  );
}

class Map extends Component {

  render() {
    return (
          <div>
              <NumberList numbers={numbers} />
              <Mailbox unreadMessages={messages} />
          </div>
    );
  }
}

export default Map;

