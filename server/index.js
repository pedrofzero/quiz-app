require('dotenv').config()
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose')
const cookieparser = require('cookie-parser')
const multer = require('multer')
const verifyJWT = require('./middleware/verifyJWT.js');


// cors
app.use(cors({ credentials: true, origin: 'http://45.136.70.211:3000' }))

// json
app.use(express.json())

// parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieparser())

// routes
app.use('/auth', require('./routes/auth.js'))

app.use(verifyJWT)
app.use('/quiz/', require('./routes/quiz.js'))
app.use('/users', require('./routes/users.js'))


// serve images
app.use(express.static('images'))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

app.post('/image', upload.single('file'), function (req, res) {
  res.json({})
})

// Connect to MongoDB
const main = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URL)
}
main()


// Listen port 
app.listen(8000, () => {
  console.log("Server running successfully.")
})