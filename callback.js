/* let x = function(){
    console.log('Hello X');
    
};
let y = function(callback){
    console.log('Do something');
    callback();
    //x();
    
}
y(x);
//y();   */



/*  let x = function(){
    console.log('Hello X');
    
};
let y = function(){
    console.log('Do something');
    //callback();
    x();
    
}
//y(x);
y();   */



/*
setTimeout(callback,2000);
function callback(){
    console.log('Hello world');
    
}   */


/*
let x = function(){
    console.log('Hello X');
    
};
let y = function(callback){
    console.log('Do something');
    callback();
    //x();
    
}
y(()=> console.log('Hello X'));
//y();    */



function finished(){
    console.log(('Finished my work'));
   }
function doWork(typeWork, callback) {
    console.log((`Starting my ${typeWork} work.`));
    callback();
   }

   doWork('Backend', finished);
 