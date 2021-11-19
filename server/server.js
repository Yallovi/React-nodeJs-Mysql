const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./middleware/cors.middleware');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);

const routes = require('./settings/routes');
routes(app);


app.listen(port, () => {
    console.log(`App listen on port ${port}`);
});

