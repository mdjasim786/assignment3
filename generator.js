/*  let arr =['Jasim','Rahul','Aditya','Rohan'];

let iterator =  arr[Symbol.iterator]();

console.log(`${iterator.next().value}
${iterator.next().value}
${iterator.next().value}
${iterator.next().value}
`);   */




/*  function *generator(){
    yield 'Jasim';
    yield 'Rahul';
    yield 'Aditya';
    yield 'Rahul';
};


let iterator = generator();

console.log(`${iterator.next().value}
${iterator.next().value}
${iterator.next().value}
${iterator.next().value}
`);    */



function *generator(){
    yield 'Jasim';
    yield 'Rahul';
    yield 'Aditya';
    yield 'Rahul';
    yield *generator1();

};

function *generator1(){
    yield 'Lokesh';
    yield 'Nitesh';
    yield 'Arya';
    yield 'Roshan';
    
};


let iterator = generator();

console.log(`${iterator.next().value}
${iterator.next().value}
${iterator.next().value}
${iterator.next().value}
${iterator.next().value}
${iterator.next().value}
${iterator.next().value}
${iterator.next().value}
`);





