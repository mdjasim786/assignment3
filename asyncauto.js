var async = require('async');

async.auto({
    intern_name: callback=> {
        var name = "Jasim";
        callback(null, name);
    },
    intern_work: callback=>{
        var work = 'Backend';
        callback(null, work);
    },
    getDetail: ['intern_name', 'intern_work', (result, callback)=> {
        var work_experience = "6months"
        var job_grade = "B";
        var intern_profile= `The Intern name is ${result.intern_name}  work as a ${result.intern_work} and work experience of ${work_experience}and his job grade is ${job_grade}`;
        callback(null, intern_profile);
    }],

}, (err, results)=> {
        console.log(results);
});