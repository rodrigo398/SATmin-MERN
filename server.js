const express = require('express');
const fileUpload = require('express-fileupload');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.use(fileUpload());

app.get('/', (req, res) => res.send('API Running'));

app.use('/public', express.static('public'));

//Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/file', require('./routes/api/file'));
app.use('/api/canon', require('./routes/api/canon'));
app.use('/api/provision', require('./routes/api/provision'));
app.use('/api/roadmap', require('./routes/api/roadmap'));
app.use('/api/productionsheet', require('./routes/api/productionsheet'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
