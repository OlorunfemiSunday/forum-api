const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Thread', threadSchema);
