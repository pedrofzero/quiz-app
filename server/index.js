require('dotenv').config()
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose')
const cookieparser = require('cookie-parser')
const multer = require('multer')
const verifyJWT = require('./middleware/verifyJWT.js');
const path = require('path')
const uuid4 = require("uuid").v4

// cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))

// json
app.use(express.json())

// parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieparser())

app.use('/auth', require('./routes/auth.js'))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    // cb(null, file.fieldname + '-' + Date.now())
    cb(null, uuid4().replace(/-/g, "") + path.extname(file.originalname))
  },
})

const upload = multer({ storage: storage })

app.post('/uploadimage', upload.single('image'), function (req, res) {
  res.send(req.file.filename);
})

app.use('/images', express.static('images'))

// routes

app.use(verifyJWT)
app.use('/quiz/', require('./routes/quiz.js'))
app.use('/users', require('./routes/users.js'))


// serve images




// Connect to MongoDB
const main = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URL)
}
main()


// Listen port 
app.listen(8000, () => {
  console.log("Server running successfully.")
})