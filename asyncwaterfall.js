var async = require('async');
  async.waterfall([
    function(callback) {
        var num1 = 10;
        var num2 =20;
        console.log(`Number1 is ${num1} and Number2 is ${num2}`);
        
      callback(null, num1, num2);
    },
    function(x, y, callback) {
      let sum = x + y;
      console.log(`Sum is : ${sum}`);
      
      callback(null, sum);
    },
    function(sum, callback) {
      let avg = sum/2;
      callback(null, avg);
    }
  ], function(err, result) {
    console.log(`Average is : ${result}`);
  });   





