```
import React from 'react'

class Main extends React.Component {
    render () {

    }
}
```
or 
```
import React , { Component } from 'react'

class Main extends Component {
    render () {

    }
}
```

====

```
export class Main extends Component {
    
}
```

or
```
class Main extends Component {
    
}

export Main;
```
===


```
const whatever = 'ok';

export const whatever;
```

 or

```
export const whatever = 'varaible or method definition';
```

 but can not write as default export such as
```
 export deafult const whatever = ''// throw error
```

rather than do
```
const whatever = '';

export default const;
```
===
```
class Main extends Component {
    render () {
       <div>
        <h1>this is Main</h1>
       </div>
    }
}
```
equals to ( implicit return)
```
const Main = () => (
    <div>
        <h1>This is main<h1>
    </div>
);
```
or

return explicitely
```
const Main = () => {
    const localVariable = '';
    return (
        <div>
            <h1>This is main<h1>
        </div>
    )
}
```
=====

```
arrayList.map( (item, key) => (
<li key={key}>{item}</li> 
))
```
or
```
arrayList.map( (item, key) => <li key={key}>{item}</li>)
```
or
```
arrayList.map( (item, key) => {
let newItem = item*2;
return <li key={key}>{newItem}</li>
})
```
or
```
arrayList.map( (item, key) => {
return (
    <li key={key}>{item}</li>
);
})
```


default export 

export default classOrFunctionOrConstant

than in import

import classOrFunctionOrConstant from './export.js'. 
or 
import classOrFunctionOrConstant from './export'

named export

export functionName;

than

import {functionName} from './export'

default export another syntax

export {somename as default};

than 

import anyNewName from './export'


// alias of named export

export { x as y}

than 

import y ;

or

import { z as y} from './export'

than use z 




