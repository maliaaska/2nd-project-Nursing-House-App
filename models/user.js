const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  	username: String,
  	password: String,
    fullname: {
      type: String,
      required: true
    },
    age: Number,
    background: String,
    activities: String,
    location: String,
    availability: String,
    location: { type: { type: String }, coordinates: [Number] },
    imageUrl: String,
  	role: {
    	type: String,
    	enum : ['user', 'nHome'],
    	default : 'user'
  	}
	}, {
  	timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
	});

 userSchema.index({ location: '2dsphere' });

const User = mongoose.model("User", userSchema);




module.exports = User;
