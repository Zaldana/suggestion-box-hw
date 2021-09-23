const Suggestion = require("../model/Suggestion");

module.exports = {

    getAllSuggestions: (body, callback) => {

        Suggestion.find(body, function(err, foundSuggestion) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, foundSuggestion)
            }
        })
    },

    getSingleSuggestion: (id, callback) => {

        Suggestion.findById(id, function (err, foundSuggestion) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, foundSuggestion);
            }
        });
    },

    createSuggestion: (body, callback) => {

        const createdSuggestion = new Suggestion({
            title: body.title,
            author: body.author,
            suggestion: body.suggestion,
            likes: body.likes,
            anonymous: body.anonymous,
        });

        createdSuggestion.save(function
            (err, savedSuggestion) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, savedSuggestion);
            }
        });
    },
}
