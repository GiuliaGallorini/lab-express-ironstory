const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const storySchema = new Schema({
  content : {
    type: String
    // validate: {
    //   validator: (str) => {
    //     return str.endsWith(`.`, `!`, `?`);
    //   },
    //   message:  `Your story should end with a single ".", "!" or "?"`
    // }
  },
  writer: String,
  date: {
    type: Date,
    default: Date.now
  }
});
const Story = mongoose.model('Story', storySchema);
module.exports = Story;





