const { Router } = require('express')
const { plataformController } = require('../controllers/PlataformController')
const router = Router()

router.get('/paths', plataformController.getLearningPaths)
router.post('/paths', plataformController.postLearning)

router.get('/recommendations', plataformController.getListOfRecommendations)
router.post('/recommendations', plataformController.postListOfRecommendations)

router.get('/topics/frontend', plataformController.getAllTopicsOfFrontend)

router.get('/topics/backend', plataformController.getAllTopicsOfBackend)

router.get(
  '/topics/complementos',
  plataformController.getAllTopicsOfComplementos
)
router.get('/:topic/:level', plataformController.getContentsByTopicAndLevel)

const plataformRouter = router
module.exports = { plataformRouter }
