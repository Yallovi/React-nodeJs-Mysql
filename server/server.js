const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./middleware/cors.middleware');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require('./settings/routes');
routes(app);


app.listen(port, () => {
    console.log(`App listen on port ${port}`);
});

