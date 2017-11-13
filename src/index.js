import hydrate from './hydrate';
import AWS from 'aws-sdk';
import {Firehose, S3} from 'aws-sdk';
import uuidv1 from 'uuid/v1';

AWS.config.update({region: 'us-east-1'});

const chunkSize = new Number(process.env.CHUNK_SIZE);
const streamName = process.env.STREAM_NAME;

const firehose = new Firehose();
const s3 = new S3();

const sendToKinesis = (subset, callback) => {
  const kinesisRecords = subset.map(row => {
    console.log(row);

    return {
      Data: new Buffer(JSON.stringify(row))
    };
  });

  const params = {
    Records: kinesisRecords,
    DeliveryStreamName: streamName
  };

  firehose.putRecordBatch(params, function(err, data) {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const sendToS3Sequential = (subset, callback) => {
  var params = {
    Bucket: process.env.BUCKET_NAME,
    MaxKeys: 500
   };

   s3.listObjects(params, function(err, data) {
     if (err) {
       callback(err);
     } else {
       const params = {
         Body: JSON.stringify(subset),
         Bucket: process.env.BUCKET_NAME,
         Key: data.Contents.length
        };

        s3.putObject(params, function(err, data) {
          if (err) {
            callback(err);
          } else {
            callback(null, data);
          }
        });
     }
   });



};


const doSend = (record) => new Promise((resolve, reject) => {
  const params = {
    Body: JSON.stringify(record),
    Bucket: process.env.BUCKET_NAME,
    Key: `${uuidv1()}.json`
   };

  s3.putObject(params, function (err, data) {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

const sendToS3 = (subset, callback) => {
  Promise.all(subset.map(record => doSend(record)))
    .then(data => callback(null, data))
    .catch(err => callback(err));
 };

const handler = (event, context, callback) => {
  const records = hydrate(event.event.serialNumber, event.transactions);

  const start = Math.floor((Math.random() * (records.length - chunkSize - 1)));

  const subset = records.slice(start, start + chunkSize);

  // sendToKinesis(subset, callback);
  sendToS3(subset, callback);


};

export default handler;
