
const interns = [
    { name: "Jasim", work: "Backend" },
    { name: "Rohan", work: "FrontEnd" }
]


function enrollment(intern) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            interns.push(intern);
            console.log("Intern has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject(Error);
            }
        }, 1000);
    })
}

function getInterns() {
    setTimeout(()=> {
        let str = "";
        interns.forEach((intern)=> str += intern.name + "\n");
        
        console.log(str);
        
        console.log("Interns have been fetched");
    }, 2000);
}

let newIntern = { name: "Aditya", work: "Backend" }
//let intern =interns.push({ name: "Aditya", work: "Backend" });

enrollment(newIntern).then(getInterns).catch((error)=> console.log("Some error occured"+error));
