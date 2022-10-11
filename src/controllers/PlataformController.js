const { Recommendation } = require('../models/Recommedation')
const { Learning } = require('../models/Learning')

const FrontendPath = {
  title: 'Ruta de Frontend',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic! Dolore reiciendis labore tenetur voluptate consequuntur consectetur quod eos, tempora debitis repellendus, dolores veritatis. At.',
  topics: [
    {
      topic: 'HTML',
      sections: [
        {
          level: 'Principiante',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/HTML/principiante',
        },
        {
          level: 'Intermedio',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/HTML/intermedio',
        },
        {
          level: 'Avanzado',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/HTML/avanzado',
        },
      ],
    },
    {
      topic: 'CSS',
      sections: [
        {
          level: 'Principiante',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/CSS/principiante',
        },
        {
          level: 'Intermedio',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/CSS/intermedio',
        },
        {
          level: 'Avanzado',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/CSS/avanzado',
        },
      ],
    },
    {
      topic: 'JavaScript',
      sections: [
        {
          level: 'Principiante',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/JavaScript/principiante',
        },
        {
          level: 'Intermedio',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/JavaScript/intermedio',
        },
        {
          level: 'Avanzado',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/JavaScript/avanzado',
        },
      ],
    },
    {
      topic: 'TypeScript',
      sections: [
        {
          level: 'Principiante',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/TypeScript/principiante',
        },
        {
          level: 'Intermedio',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/TypeScript/intermedio',
        },
        {
          level: 'Avanzado',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/TypeScript/avanzado',
        },
      ],
    },
    {
      topic: 'React',
      sections: [
        {
          level: 'Principiante',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/React/principiante',
        },
        {
          level: 'Intermedio',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/React/intermedio',
        },
        {
          level: 'Avanzado',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/React/avanzado',
        },
      ],
    },
    {
      topic: 'Angular',
      sections: [
        {
          level: 'Principiante',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/Angular/principiante',
        },
        {
          level: 'Intermedio',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/Angular/intermedio',
        },
        {
          level: 'Avanzado',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/Angular/avanzado',
        },
      ],
    },
  ],
}

const BackendPath = {
  title: 'Ruta Backend',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic! Dolore reiciendis labore tenetur voluptate consequuntur consectetur quod eos, tempora debitis repellendus, dolores veritatis. At.',
  topics: [
    {
      topic: 'Topic 1',
      sections: [
        {
          level: 'Principiante',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/topic1/principiante',
        },
        {
          level: 'Intermedio',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/topic1/intermedio',
        },
        {
          level: 'Avanzado',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/topic1/avanzado',
        },
      ],
    },
    {
      topic: 'Topic 2',
      sections: [
        {
          level: 'Principiante',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/topic2/principiante',
        },
        {
          level: 'Intermedio',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/topic2/intermedio',
        },
        {
          level: 'Avanzado',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/topic2/avanzado',
        },
      ],
    },
    {
      topic: 'Topic 3',
      sections: [
        {
          level: 'Principiante',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/topic3/principiante',
        },
        {
          level: 'Intermedio',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/topic3/intermedio',
        },
        {
          level: 'Avanzado',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/topic3/avanzado',
        },
      ],
    },
    {
      topic: 'Topic 4',
      sections: [
        {
          level: 'Principiante',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/topic4/principiante',
        },
        {
          level: 'Intermedio',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/topic4/intermedio',
        },
        {
          level: 'Avanzado',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/topic4/avanzado',
        },
      ],
    },
    {
      topic: 'Topic 5',
      sections: [
        {
          level: 'Principiante',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/topic5/principiante',
        },
        {
          level: 'Intermedio',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/topic5/intermedio',
        },
        {
          level: 'Avanzado',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic!',
          link: '/aprender/topic5/avanzado',
        },
      ],
    },
  ],
}

const ContentsHTML = [
  {
    topic: 'HTML',
    level: 'Principiante',
    contents: [
      {
        order: 1,
        title: '',
        description: '',
        link: '',
      },
      {
        order: 2,
        title: '',
        description: '',
        link: '',
      },
      {
        order: 3,
        title: '',
        description: '',
        link: '',
      },
      {
        order: 4,
        title: '',
        description: '',
        link: '',
      },
    ],
  },
]

class PlataformController {
  getListOfRecommendations = async (req, res, next) => {
    try {
      const recommendFound = await Recommendation.find()

      return res.status(200).json(recommendFound).end()
    } catch (e) {
      next(e)
    }
  }

  postListOfRecommendations = async (req, res, next) => {
    try {
      const { body } = req
      const recommendationSchema = new Recommendation(body)
      await recommendationSchema.save()

      return res.status(202).json({ message: 'saved recommendation' }).end()
    } catch (e) {
      next(e)
    }
  }
  
  getLearningPaths = async (req, res, next) => {
    try {
      const LearningPaths = await Learning.find()

      return res.status(202).json(LearningPaths).end()
    } catch (e) {
      next(e)
    }
  }

  postLearning = async (req, res, next) => {
    try {
      const { body } = req

      const dataWithoutSave = body.map((data) => {
        const learn = new Learning(data)

        return learn.save()
      })

      await Promise.allSettled(dataWithoutSave)

      return res.status(202).json({ message: 'learning post saved in database' }).end()
    } catch (e) {
      next(e)
    }
  }

  getAllTopicsOfFrontend = async (req, res, next) => {
    try {
      return res.status(202).json(FrontendPath).end()
    } catch (e) {
      next(e)
    }
  }

  getAllTopicsOfBackend = async (req, res, next) => {
    try {
      return res.status(202).json(BackendPath).end()
    } catch (e) {
      next(e)
    }
  }

  getAllTopicsOfComplementos = async (req, res, next) => {
    try {
      return res.status(202).json(BackendPath).end()
    } catch (e) {
      next(e)
    }
  }

  getContentsByTopicAndLevel = async (req, res, next) => {
    try {
      const { topic, level } = req.params
      if (
        topic.toLowerCase() === 'html' &&
        level.toLowerCase() === 'principiante'
      ) {
        return res.status(202).json(ContentsHTML).end()
      }
    } catch (e) {
      next(e)
    }
  }
}

const plataformController = new PlataformController()
module.exports = { plataformController }
