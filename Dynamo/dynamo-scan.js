// Load the SDK and UUID
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB({region: 'us-east-2', apiVersion: '2012-08-10'});
const uuid = require('node-uuid');

// Connect from lamb
var params = {
    TableName: "compare-yourself"
};

dynamoDB.scan(params,function (err, data) {
    if(err) {
        console.log(err);
       // callback(err);
    }else{
        console.log(data);
       // callback(data);
        const items = data.Items.map( (dataField) => {
            return {age: +dataField.Age.N, height: +dataField.Height.N,income: +dataField.Income.N};
        })

    }
})