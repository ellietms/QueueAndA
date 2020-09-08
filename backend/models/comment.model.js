const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newComment = new Schema(
	{
		userName: { type: String, required: true },
		comment: { type: String, required: true }
	},
	{
		timestamps: true
	}
);

const Comment = mongoose.model('Comment', newComment);

module.exports = Comment;
