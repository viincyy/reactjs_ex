"use strict";
// CLASS
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    // public name: string;
    // private age: number;
    // readonly male: boolean;
    // constructor(name: string, age: number, male: boolean){
    //     this.name = name;
    //     this.age = age;
    //     this.male = male;
    // }
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employee.prototype.getAge = function () {
        return this.age;
    };
    return Employee;
}());
exports.Employee = Employee;
var employee_01 = new Employee('S', 30, true);
// console.log(employee_01) 
// console.log(employee_01.getAge()) 
var employee = [];
var S = new Employee('S', 24, true);
var T = new Employee('T', 24, false);
employee.push(S);
employee.push(T);
employee.forEach(function (employee) { return console.log(employee); });
