const mongoose = require('mongoose');

//node.js si middleware mes vue.js dhe databazes
const JobsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    updated_date:{ type:Date, default:Date.now },

    // UploadImg: {
    //     type: String,
    //     required: 'This fild is required.'
    // },
});

module.exports = mongoose.model('Jobs', JobsSchema);