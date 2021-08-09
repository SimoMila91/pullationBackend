const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');

const s3 = new S3({
  region : process.env.REGION,
  accessKeyId: process.env.ACCESKEY,
  secretAccessKey: process.env.SECRETKEY
})
//uploads a file to s3
function  uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: 'pollutionimages',
    Body: fileStream,
    Key: file.filename
  } 
  console.log(file.filename);
  return s3.upload(uploadParams).promise();
}
exports.uploadFile = uploadFile;

// downloads a file from s3

function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: 'pollutionimages'
  }
  return s3.getObject(downloadParams).createReadStream();
}
exports.getFileStream = getFileStream; 
