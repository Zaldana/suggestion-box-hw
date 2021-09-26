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

router.post('/create-suggestion', function (req, res) {
    suggestionController.createSuggestion(req.body, function (err, savedSuggestion) {
        if (err) {
            req.status(500).json({
                message: "Something went wrong!",
                error: err.message
            });

        } else {
            res.json({ message: "success", savedSuggestion })
        }
    });
});

router.put("/update-suggestion/:id", function (req, res) {
    suggestionController.updateSuggestion(req.params.id, req.body, 
        function (err, updatedSuggestion) {
        
            if (err) {
            res.status(500).json({
                message: "Something went wrong!",
                error: err.message
            });
        } else {
            res.json({ message: "success", updatedSuggestion });
        }
    });
});

router.delete('/delete-suggestion/:id', function (req, res) {
    suggestionController.deleteSuggestion(req.params.id, function (err, deletedSuggestion) {
        if (err) {
            res
                .status(500)
                .json({
                    message: "Something went wrong!",
                    error: err.message
                });
        } else {
            res.json({ message: "success", deletedSuggestion });
        }
    });
});

module.exports = router;