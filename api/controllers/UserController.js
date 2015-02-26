/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
//
module.exports = {
    'signupform': function (request, result) {
        result.view();
    },
    'create': function (request, result) {
        User.create(request.body, function (err, user) {
            if (err) {
                result.status(500).send(err);
                return;
            }
            result.ok();
        });

    }
};

