import express from 'express';
import { engine } from 'express-handlebars';
import router from '../routes/app.routes.js';


const app = express();

// Engines Handlebars
// Set templates
app.engine('handlebars', engine());
app.set('views', './views');
app.set('view engine','handlebars');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));

//Routes 
app.use(router);


export default app;