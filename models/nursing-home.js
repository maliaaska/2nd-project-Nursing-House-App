const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const nhomesSchema = new Schema({
    username: String,
    password: String,
    role: {
      type: String,
      enum : ['EDITOR', 'ADMIN'],
      default : 'ADMIN'
    }
  }, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

const Nhome = mongoose.model("Nhome", nhomesSchema);

module.exports = Nhome;