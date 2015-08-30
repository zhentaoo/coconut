var program = require('../model').Program;

exports.index = function (req, res, next) {
    //res.send(req.session.name);
    program.find({}, function (err, docs) {
            console.log(docs);
            res.render('program/index', {
                session: req.session,
                program: docs
            });
        }
    )
};
