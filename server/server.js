const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./middleware/cors.middleware');
const app = express();
const port = process.env.PORT || 5000;
const passport = require('passport');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);
app.use(passport.initialize());
require('./middleware/passport')(passport);

const routes = require('./settings/routes');
routes(app);


app.listen(port, () => {
    console.log(`App listen on port ${port}`);
});

