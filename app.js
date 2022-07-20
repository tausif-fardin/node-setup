const express = require('express');
require('dotenv').config()

app = express();
app.set('view engine', 'ejs');

app.use('/', require('./routes/home'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
})
