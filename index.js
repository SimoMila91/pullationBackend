const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
let port = process.env.PORT || 3000; 

let db = mysql.createPool({
  host:  "localhost",
  user: 'root',
  password: 'password',
  database: 'pollution',
  port: 3306
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
}).single('file');

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



const uploadFile = (req, res) => {
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
      res.status(200).send('The report has been received. Planet earth thanks you.');
    }
  })
};

app.get("/reports", reports);
app.post("/upload", uploadMiddleware, uploadFile);
app.listen(port, () => { console.log(`Server started at port: ${port}`)});
