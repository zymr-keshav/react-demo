import React from 'react';

import {
  Route,
  Link
} from 'react-router-dom'

const messages = ['React', 'Fwd:React', 'Re:React', 'Re:Fwd:React', 'Fwd:Re:React'];
const numbers = [1, 2, 3, 4, 5];

export function Mailbox(props) {
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

export function NumberList(props) {
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

export const Mapp = ({routes}) => (
            <div>
              <h2>Map listing</h2>
              <ul>
                <li><Link to="/map/num">Numbers</Link></li>
                <li><Link to="/map/mail">Mails</Link></li>
              </ul>
              {routes.map((route,i) => (
                <RouteWithSubRoutes key={i} {...route} />
              )
              )}
          </div>
)





