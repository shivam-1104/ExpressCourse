import express from 'express';
import path from 'path';
import logger from './middleware/logger.js';
import {fileURLToPath} from 'url' ;
import errorHandler from './middleware/error.js';
import posts from './routes/posts.js';
import notFound from './middleware/notFound.js';
const port = process.env.PORT || 8000;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger Middleware
app.use(logger);


//Setup Static Folder
app.use(express.static(path.join(__dirname, 'Public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'Public', 'index.html'));
// } );

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'Public', 'about.html'));
// } );

// Routes
app.use('/api/posts',posts);

// Error Handler
app.use(notFound);
app.use(errorHandler);



app.listen(port, ()=> console.log(`Server is listening to port port ${port} `) );