/*const Employee = {
    Post : function() {
        return "A software developer";
    },
    changeName : function(name) {
        this.Name = name;
    }
}

var E1 = Object.create(Employee);
E1.Name = "Bujji";
E1.Role = "Owner";
E1.changeName("Bujji Pagadala");
console.log(E1);*/


function Employee(name, id, salary){
    this.name = name;
    this.id = id;
    this.salary = salary;
}

Employee.prototype.post = function() {
    return(this.name + " is a content creator");
}

var empObj = new Employee("Bujji", 32, 10000);
console.log(empObj);

