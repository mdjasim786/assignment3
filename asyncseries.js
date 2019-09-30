var async = require('async');
    async.series({
    Num1: callback=>{
      setTimeout(()=> {
        callback(null, 10);
      }, 200);
    },
    Num2: callback=> {
      setTimeout(()=> {
        callback(null, 20);
      }, 300);
    },
    Sum: callback=> {
      setTimeout(()=> {
        callback(null, 10 + 20);
      }, 100);
    },
    Average: callback => {
        setTimeout(()=> {
          callback(null, (10 + 20)/2);
        }, 50);
      }
  },
  (err, results)=> {
    console.log(results);
  });     
  