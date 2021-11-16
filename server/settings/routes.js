module.exports = (app) => {
    const indexController = require('./../Controller/IndexController');
    const usersController = require('./../Controller/UsersController');

    // app.route('/').get(indexController.index);
    app
        .route('/api/users')
        .get(usersController.users);
    app
        .route('/api/users/add')
        .post(usersController.add);
    app
        .route('/api/auth/signup')
        .post(usersController.signup);




};