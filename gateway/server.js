const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

PORT = process.env.PORT || 5005

app.use('/api/did', require('./routes/didRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});  