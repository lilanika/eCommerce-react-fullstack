1. npm init  entry point -> server.js
2. npm install express 


3. server.js file 
- creating a server that running on Port 5000 
- creating a script for start in the package.json to just write npm start  instead of node backend/server

-  in frontend we use import syntax wich is a es modules 
export default products is es modules. To use it in the backend we need to change files that needs to communicate to common JS module.exports = products   

- when we want to use in the backend ES6 Module syntax we need  add 


1. "type": "module", in package.json
2. change the export in import from syntax 
3. change module.exports = products in our dummydata back in the ES6 syntax 

  You can also use npm package called esm which allows you to use ES6 modules in Node.js. It needs no configuration. With esm you will be able to use export/import in your JavaScript files.



NOW we want to create first Routes: 

- creating first get Route to test it go to localhost:5000
- creating a get Route ('/api/products') to send the JSON product array  to this adress. 
-  creating a route to get just a single product by its id



4. data folder

In this folder we shift dummy data. 

 
Install DOTENV  to deal with 

- install DOTENV and deal with environment variables


