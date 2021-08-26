// TYPE ALIAS
type StringOrNumber = String | Number
type Student = {name: string; id: StringOrNumber}

const studentDetail = (id: StringOrNumber, studentName: string): void => {
    console.log(`Student ${studentName} has id ${id}`);
}
console.log(studentDetail(1, 'S'));

const greet2 = (user: Student) => {
    console.log(`student has id ${user.id} says hello`);
}
greet2({name: 'S', id: 213});