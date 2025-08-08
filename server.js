const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;
const app = express();


app.use((cors));
app.use((express));

app.listen(PORT, () => {
console.log('server has started')
});

