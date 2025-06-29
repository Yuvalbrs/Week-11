const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const articles = require('./routes/article');
const categories = require('./routes/category');

require('dotenv').config();

const app = express();

// התחברות למסד הנתונים
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use('/articles', articles);
app.use('/categories', categories);



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
