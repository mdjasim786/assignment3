/*  async function getSum(){
    return 5;
}
console.log(getSum());   */


/* async function getSum(){
    return 5;
}
getSum().then(data =>console.log(data));   */

 
 /*  function getSum(){
    return new Promise((res, rej) =>{
        setTimeout(() =>{
            res('Hello Jasim')
        },3000)
    })
}
async function display(){
   try{
    var x = await getSum();
    console.log(x);
   }catch(err){
       console.log(err);
   }   
}
display();   */

  function cube(x) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const error = false;
        if(!error)
        resolve(x * x * x);
        else reject(Error);

      }, 1000);
    });
  }
  
  async function sumOfCube(x) {
    const a = await cube(5);
    const b = await cube(10);
    const c = await cube(15);
    return a + b + c;
  }
  
  
  sumOfCube().then((sum) =>console.log(sum)).catch((err)=>console.log('error occured:' + err));  