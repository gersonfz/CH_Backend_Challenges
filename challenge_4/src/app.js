import express from 'express';
import { engine } from 'express-handlebars'
import viewsRoute from './routers/views.routes.js';
import {fileURLToPath} from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();


//Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));


// Set templates
app.engine('handlebars', engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');


// Routes
app.use('/', viewsRoute);



export default app;