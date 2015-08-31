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

exports.showOneProgram = function (req, res, next) {
    program.findById(req.query.id, function (err, docs) {
        console.log(docs)
        res.render('program/show.ejs', {
            session: req.session,
            program: docs
        });
    });
};