function Student(name,age,gender,standard){
this.name=name;
this.age=age;
this.gender=gender;
this.standard=standard;
}

function Teacher(){
Student.call(this);
this.subject=subject;
}



