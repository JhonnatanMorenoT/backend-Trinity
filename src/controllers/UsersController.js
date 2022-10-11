const bcrypt = require('bcrypt')
const PrimaryController = require('./PrimaryController')
const { User } = require('../models/User')

class UsersController extends PrimaryController {
  constructor() {
    super(User)
  }

  create = async (req, res, next) => {
    try {
      const { body } = req;
      const { username, password, rol } = body;
      const userValidateUsername = await User.findOne({ username });
      const { JWT_PASSWORD } = process.env;
      const message = `this username already exist`

      if (userValidateUsername)
        return res.status(409).json({ error: 409, message }).end()

      const saltRounds = 10
      const passwordHash = await bcrypt.hash(password, saltRounds)
      const user = new User({
        username,
        passwordHash,
        rol,
        status:false
      })

      const savedUser = await user.save();
      const token = jwt.sign({ ...user, id: savedUser.id }, JWT_PASSWORD);

      return res.status(201).json({ id: savedUser.id, ...user, token }); 
  }   catch (err) {
      console.log('[+] ERROR:', err);
      }
      return res.status(400).json({ message: 'error to try to create a new user' });
    }
  
}

const userController = new UsersController()

module.exports = { userController }
