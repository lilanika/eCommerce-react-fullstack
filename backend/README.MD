1. npm init  entry point -> server.js
2. npm install express 


3. server.js file 
- creating a server that running on Port 5000 
- creating a script for start in the package.json to just write npm start  instead of node backend/server

-  in frontend we use import syntax wich is a es modules 
export default products is es modules. To use it in the backend we need to change files that needs to communicate to common JS module.exports = products   

- creating first get Route to test it go to localhost:5000
- creating a get Route ('/api/products') to send the JSON product array  to this adress. 
-  creating a route to get just a single product by its id


4. data folder