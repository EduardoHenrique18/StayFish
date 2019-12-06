const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moneySchema = new Schema({
    value: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        trim: true
      },
      moneyDate: {
        type: Date,
        required: true
      },
      status: {
        type: String,
        required: true
      },
      observation: {
        type: String,
        trim: true
      },
      idUser: {
          type: String,
          required: true
      },
      category: {
          type: String,
          required: true,
          trim: true
      }
    }, {
        timestamps: true,
      })

const Money = mongoose.model('Money', moneySchema);

module.exports = Money;
