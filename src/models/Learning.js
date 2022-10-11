const { model, Schema } = require('mongoose')

const LearningSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  image: String,
  link: String,
})

const Learning = model('Learning', LearningSchema)

module.exports = { Learning }
