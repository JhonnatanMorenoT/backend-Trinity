const { model, Schema } = require('mongoose')

const RecommendationSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  subtitle: String,
  typeSite: {
    type: String,
    enum: ['youtube', 'sitioweb'],
    require: true,
  },
  link: String,
})

const Recommendation = model('Recommendation', RecommendationSchema)

module.exports = { Recommendation }
