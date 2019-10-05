const mongoose = require('mongoose');

// Esquema do usuário, quais campos esse usuário vair ter e quais os tipos desses campos.
const UserSchema = new mongoose.Schema({
    email: String,
});

module.exports = mongoose.model('User', UserSchema);