const mongoose = require('mongoose');
const config = require('../config/config-envs');
// Esquema do usuário, quais campos esse usuário vair ter e quais os tipos desses campos.
const SpotSchema = new mongoose.Schema(
  {
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

SpotSchema.virtual('thumbnail_url').get(function() {
  return `${config.BASE_URL}/files/${this.thumbnail}`;
});

module.exports = mongoose.model('Spot', SpotSchema);
