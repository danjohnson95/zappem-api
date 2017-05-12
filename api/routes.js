module.exports = function(app){

    var exceptionController = require('./controllers/ExceptionController.js');
    var projectController = require('./controllers/ProjectController.js');
    var errorController = require('./controllers/ErrorController.js');
    var userController = require('./controllers/UserController.js');
    var instanceController = require('./controllers/InstanceController.js');

    app.route('/projects')
        .post(projectController.createNew)
        .get(projectController.showAll);

    app.route('/projects/:id')
        .put(projectController.updateById)
        .get(projectController.findById);

    app.route('/exceptions')
	    .get(exceptionController.showAll);

    app.route('/exceptions/:id')
        .get(exceptionController.findById);

    app.route('/exceptions/:id/assign')
        .put(exceptionController.assignUser)
        .delete(exceptionController.unassignUser);

    app.route('/instances')
        .get(instanceController.showAll);

    app.route('/instances/:id')
        .get(instanceController.findById);

    app.route('/error')
        .post(errorController.createNew);

    app.route('/users')
        .get(userController.showAll)
        .post(userController.createNew);

    app.route('/users/:id')
        .get(userController.findById)
        .put(userController.updateById);

};