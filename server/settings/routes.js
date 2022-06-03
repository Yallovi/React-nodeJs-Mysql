module.exports = (app) => {
    const authMiddleware = require('../middleware/auth.middleware');
    const passport = require('passport');
    const usersController = require('./../Controller/UsersController');
    const testController = require('../Controller/TestController');

    // app.route('/').get(indexController.index);
    app
        .route('/api/users')
        .get(passport.authenticate('jwt', { session: false }), usersController.users);
    app
        .route('/api/users/add')
        .post(usersController.add);
    app
        .route('/api/auth/signup')
        .post(usersController.signup);
    app
        .route('/api/auth/signin')
        .post(usersController.signin);
    app
    .route('/api/auth/authentication')
    .get(authMiddleware ,usersController.authentication);
    app
        .route('/api/auth/privateOffice')
        .post(usersController.privateOffice);
    app
    .route('/api/auth/progress')
    .post(usersController.progress);

    app
    .route('/api/auth/getProgress')
    .post(usersController.getProgress);
    app
    .route('/api/addTestProgress')
    .post(testController.addTestTheory);
};
