// Load the SDK and UUID
const AWS = require('aws-sdk');
//const dynamoDB = new AWS.DynamoDB.DocumentClient({region: 'us-east-2', apiVersion: '2012-08-10', convertEmptyValues: true});
const dynamoDB = new AWS.DynamoDB({region: 'us-east-2', apiVersion: '2012-08-10'});
const uuid = require('node-uuid');

// Connect from lamb
var params = {
    TableName: "2017-GEN-I-SUP",
    Key: {
        "ticket": {
            "S": "1730110433"
        }
    }

};

dynamoDB.getItem(params,function (err, data) {
    if(err) {
        console.log(err);
       // callback(err);
    }else{
       console.log(data);
       // callback(data);
        //console.log({age: +data.Item.Age.N, height: +data.Item.Height.N, income: +data.Item.Income.N}) ;

    }
})