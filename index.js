const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const { uploadFile } = require('./s3');
let port = process.env.PORT || 3000; 

let db = mysql.createPool({
  host:  process.env.HOST_NAME,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));
app.use('images', express.static(path.join(__dirname, 'images')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    const name = Date.now() + path.extname(file.originalname);
    cb(null, name);
    req.body.name = name; 
  },
});

const uploadMiddleware = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
      cb(null, false, new Error("Only images are allowed"));
    }
    cb(null, true);
  }
});

const reports = (req, res) => {
  let query = `SELECT * FROM report`;
  db.query(query, (err, ress) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(ress);
    }
  });
};



const dbUpload = (req, res, next)   => {
  const d = new Date();
  const reportDate = d.toLocaleDateString();

  let query =`
  INSERT INTO report(reportDate, image, city, country, address, description) 
  VALUES('${reportDate}', '${req.body.name}', '${req.body.city}', '${req.body.country}', '${req.body.address}', '${req.body.description}')
`; 
  db.query(query, (err, ress) => {
    if (err) {
      res.status(500).send(err); 
    } else {
     next();
    }
  })
}
const catchAsync =(req, res, next) => {
  if (!req.file) return next(); 
 sharp(req.file.buffer)
   .resize(200, 200)
   .jpeg({ quality: 90 });
  next();
 };

app.post('/upload', catchAsync, uploadMiddleware.single('file'), dbUpload, async (req, res) => {
  const file = req.file; 
  console.log(file);
  const result = await uploadFile(file);
  console.log(result);
  res.status(200).send('The report has been received. Planet earth thanks you.');
})

app.get("/reports", reports);
app.listen(port, () => { console.log(`Server started at port: ${port}`)});
