const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    Guild: mongoose.SchemaTypes.String,
    Command: mongoose.SchemaTypes.String,
    Content: mongoose.SchemaTypes.String,
} );

module.exports = mongoose.model('customcommands', Schema);