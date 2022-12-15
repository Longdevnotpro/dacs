const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan')
const route = require('./route')

const db  = require('./config/db');

// CONNECT DB 

db.connect();

app.use(express.urlencoded({ extended: true }))

// SET VIEW HANDLEBAR
const hbs = require('express-handlebars')
app.engine('.hbs', hbs.engine({
  extname: '.hbs',
 
}))
app.set('view engine', '.hbs');
app.set('views', './src/resources/views')

app.use(morgan('combined'))

// set static route (if path coincide public/... it redirect path u put)
app.use(express.static('./src/public'))



route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}/`);
})

