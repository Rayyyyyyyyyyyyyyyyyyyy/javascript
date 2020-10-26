function Employee(firstName, lastName, department) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;

}

Employee.prototype.getDepartment = function() {
    return this.department;
}

var person = new Employee('Jack', 'Wang', 'HR');
person.getDepartment()