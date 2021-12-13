React is a single page App framework. Its used to create single page spplication. What I mean by that is the browser initially reads this single index.html file. 

ReactDOM has a method called Render where it takes our main app compontent, wich is an app compontent. 
and puts into whetever we put in the document.getElement.ById('root).
Every custom compontent we will create we will take in the app.js


1. nutzen wir Dummydata um zu testen ob das frontend funktioniert. 

- erstellen wir eine product.js in src
- in screens Homescreen  loopen wir mit map über jedes projekt um es auf den screen anzeigen zu lassen.

 Steps: Starting the Frontend 
 - React Setup 
 - React Bootrstrap Setup 
 - add HomeScreen and Product Lisining
 
  ( using Dummydata to test if the frontend works - map through the Dummydata Array send the information through props to Product.Js )

 - add Rating Compontent
 - implementing React Router and Bootrap Link Container 
 - add Product Details Screen  



/ Next we want to use Import export syntax in the front and backend. 

add type module to your package.json
and make sure to add a js when you bring actual JavaScript files. 




Comopnents. 
footer
 Header
 Products.js
  - ist für das rendering(displaying) der daten verantwortlich. Erhält diese durch (props) und destruturing  von der HOmeScreen componente. 

RATING 


The Rating will depend on the value that passed in wich is the product rating. 

How we do it?  
With terminary Operator. 
The classname will depend on the value. 


- if the value is greater than or equal to one then we want to show full star or other stars. 


/* 

That means: if text exist than show it. 
<span>{text && text}</span>

lange version: 

if text show the text else show nothing: 
<span>{text  ?  text  : ''}</span>


When you want default prop color: 



impt = import proptypes
*/ 





  Screens
  Homescreen
  - hier holen wir uns die Daten von unsere Dummydata. 
  und schicken diese an Product compontent weiter, indem wir Product compontent anzeigen lassen und property erstellen. product={product}




/// After we add the BrwoserRouter and the Bootstrap router we
using for the href Tags  the Boostrap link Container (because Bard prevering it) 



_______________________________________________________________

Now we have a backend. How we can requestes our porduct files from the backend instead to use dummydata? 

1. go to HomeScreen 
2. add  products backend file as cmpontent level state
state has compontent or flobal application state. 
- products is gping to be a global state when we get into Redux but fo now we make it part of this HomeScreen compontent. 

compontent level state will be things like: 
nav compontent it will be a open and close state. 
useres. products will be global. 
2. import useState 
- allow us to   use state functional compontents because traditionally with class based compontents you would define your state in the constructor. 
 -useState takes two things: we want to call this piece of state wich is products and then we call a function to manipulate this state. 
 In our case we pass a empty array as default state. 

3. then we use the useEffect hook to make a request to our backend because what useEffekt does is we define it and it takes an arrowFunction. Whatever we put in here is going  run as soon as the compontent loads.  As soon as this HomeScreen component load that going to fire off. 
- thats where we want to make our axios request to the backend caouse we want these products as soon as the compontent is loads. 


_____

After we have a backend now: 

In the frontend Side: 
1. wie senden wir die Daten vom Backend an das Frontend und zeigen das an ? 

In homeScreen we use Hook to change the state and write in the useEffect a async function wo wir mithilfe von einem GET request an das backend unsere Produkte erhalten.With the help of a proxy we are able to display our product Array in the frontend. 


Über das State: 

 const [products, setProducts] = useState([])

  products ist in dem fall ein empty state => returnt keine produkte 
  bis die useEffect funktion ausgeführt wurde 
  nachdem die produkte vom Backend gesendet wurden wird data an setProducts funktion übergeben. Der State ist indemfall unser product Array durch das wir mappen. Ganz ohne frontend File  */

Gut zu wissen: 
 // access the res.data show it on the localhost500/api/products
    const { data } = await axios.get('/api/products')

we could do it also like this 
const res = await axios.get('/api/products') 
with that we have access to res.data Object. But we habe decide to   destructure so we can use the data directly
Also we define here where we want to show (render) our data that we have fetched. -> ('/api/products')

Next we need to add a proxy  in our FRONTEND package.json to make the GET request done. With the help of a proxy we are able to display our product Array in the frontend. 

-  add to json:  "proxy": "http://127.0.0.1:5000", 
  // access the res.data show it on the localhost500/api/products
      const { data } = await axios.get('/api/products')

Outside of fetchProducts we need to call the function. 


/* Produkt Component ist für das Homescreen und ist für die Darstellung der karten verantwortlich. 
HomeScreen -> Product -> Rating  */

