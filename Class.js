class Person {
costructor(name,age,gender){
this.name=name;
this.age=age;
this.gender=gender;
}
}

class Teacher extends Person{
constructor(name,age,gender,subject){
super(name,age,gender)

this.subject=subject;
}
}

let teacher1 = new Teacher("paul",35,"Male","English");

console.log(teacher1.name);
