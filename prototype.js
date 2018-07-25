function Student(name,age,gender,standard){
this.name=name;
this.age=age;
this.gender=gender;
this.standard=standard;
}

function Teacher(){
Student.call(this,name,age,gender);
this.subject=subject;
}

Student.prototype= new Teacher();

var teacher1 = new Teacher("mark",27,"male","Mathematics");



