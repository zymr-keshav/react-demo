testing with core react functionality
- added *webpack.config.js*

How to run

navigate to project root directory

- `npm install` to install all dependencies
- `npm start` to run 

Note: all files which are being used  from *src/async* folder 

basic file is */src/index.jsx*

all other folders components, containers reducer have the code for todo app with redux which  will work when you makes change in *webpack.config.js* 

`entry: APP_DIR + '/index.js',`

###WHAT is this branch

- tried how Async operations works with help of https://redux.js.org/docs/advanced/AsyncActions.html

- added react-thunk and react-0logger middlewares which now enable dispatch inside dispatch
- checked with reddit API to fetch content 





