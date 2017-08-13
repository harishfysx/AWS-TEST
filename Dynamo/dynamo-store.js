// Load the SDK and UUID
const AWS = require('aws-sdk');
const uuid = require('node-uuid');
const dynamoDB = new AWS.DynamoDB({region: 'us-east-2', apiVersion: '2012-08-10'});


// Connect from lamb
var params = {
    Item:{
        "UserId": {
            S: "harishfysx"+Math.random()
        },
        "Age": {
            N: "34"
        },
        "Height": {
            N: "5"
        },
        "Income": {
            N: "6500"
        }
    },
    TableName: "compare-yourself"
};

dynamoDB.putItem(params,function (err,data) {
    if(err) {
        console.log(err)
        //callback(err);
    }
    else {
        console.log(data)
        //callback(null,data);
    }
})