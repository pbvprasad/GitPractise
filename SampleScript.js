class Student {
    name = "";
    age = 0;
    roll = 0;
    constructor(name, age, roll){
        this.name = name;
        this.age = age;
        this.roll = roll;
    }
    Org(){
        return("I am " + this.name + " from Bradford");
    }
    dob(){
        return("Age is : " + this.age);
    }
}

var stObj = new Student("Bujji", 43, 10);
console.log(stObj);
console.log(stObj.Org.toString());
console.log(stObj.dob.toString());  