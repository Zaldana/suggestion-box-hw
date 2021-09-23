var express = require('express');
var suggestionController = require('./controller/suggestionController');
var router = express.Router();

router.get('/', function (req, res, next) {

    suggestionController.getAllSuggestions({}, function (err, foundSuggestion) {
        if (err) {
            res.status(500).json({
                    message: "Something went wrong!", error: err.message
                });
        } else {
            res.json({ message: "success", foundSuggestion });
        }
    });
});

router.get('/get-single-suggestion/:id', function (req, res) {
    
    suggestionController.getSingleSuggestion(req.params.id, function (err, foundSuggestion) {
        if (err) {
            res.status(500).json({
                    message: "Something went wrong!",
                    error: err.message
                });
        } else {
            res.json({ message: "success", foundSuggestion });
        }
    });
});

router.post("/create-suggestion", function (req, res) {
    suggestionController.createSuggestion(req.body, function
        (err, savedSuggestion) {
        if (err) {
            res.status(500).json({
                message: "Something went wrong!",
                error: err.message
            });
        } else {
            res.json({ message: "success", savedSuggestion });
        }
    });
});


module.exports = router;