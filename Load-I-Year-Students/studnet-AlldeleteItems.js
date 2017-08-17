// Load the SDK and UUID
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB({region: 'us-east-2', apiVersion: '2012-08-10'});
const uuid = require('node-uuid');

// Connect from lamb
var params = {
    TableName: "2017-GEN-I-SUP"
};

dynamoDB.describeTable(params, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        var table = data['Table'];
        console.log(table);
    }
});