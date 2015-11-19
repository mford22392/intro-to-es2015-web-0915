import Job from './job.js'
import {validJobs} from './job.js'
class Person{
  constructor(name, job){
    this.name = name;
    this.job = job;
  }
};

var programmer = new Job("Programmer");
var bob = new Person("Bobby", programmer)
console.log(`validJobs are ${validJobs}`);
console.log(`${bob.name} is a ${bob.job.title}`);