const mongoose = require('mongoose');

//node.js si middleware mes vue.js dhe databazes
const ContactsSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Please enter your name'],
        trim:true,
        maxLength:[20,'Your name cannot exceed 20 characters']
    },
    lastname: {
        type:String,
        required:[true, 'Please enter your lastname'],
        trim:true,
        maxLength:[20,'Your lastname cannot exceed 20 characters']
    },
    country: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:[true, 'Please enter product description']
    },
    updated_date:{ type:Date, default:Date.now },
});

module.exports = mongoose.model('Contacts', ContactsSchema);