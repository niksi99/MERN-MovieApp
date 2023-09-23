const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    DirectedBy: {
        type: String,
        required: true
    },
    WrittenBy: {
        type: String,
        required: true
    },
    ReleaseYear: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Movie', MovieSchema)