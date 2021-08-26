// CLASS

export class Employee {
    // public name: string;
    // private age: number;
    // readonly male: boolean;

    // constructor(name: string, age: number, male: boolean){
    //     this.name = name;
    //     this.age = age;
    //     this.male = male;
    // }
    constructor(
        public name: string,
        private age: number,
        readonly male: boolean
    ){}
    getAge(){
        return this.age;
    }
}

const employee_01 = new Employee('S', 30, true);
// console.log(employee_01) 
// console.log(employee_01.getAge()) 

let employee: Employee[] = [];
const S = new Employee('S', 24, true);
const T = new Employee('T', 24, false);

employee.push(S);
employee.push(T);

employee.forEach((employee) => console.log(employee))