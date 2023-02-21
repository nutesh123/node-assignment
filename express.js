const express = require('express')
const bodyParser = require('body-parser');

const app = express();

// Set up the body parser middlewa
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/add-product',(req, res)=>{
    res.send(`
    <form method="POST" action="/add-product">
    <label for="name">Product Name:</label>
    <input type="text" id="name" name="name">

    <label for="size">Product Size:</label>
    <input type="text" id="size" name="size">

    <button type="submit">Submit</button>
  </form>
  `)
    
})

app.post('/add-product', (req, res) => {
    // Parse the form data using the body parser
    const name = req.body.name;
    const size = req.body.size
  
    // Log the parsed data to the console
    console.log(size);
  
    // Send a response back to the client
    res.send(`Product added: ${name}, ${size}`);
  });

app.listen(3000)