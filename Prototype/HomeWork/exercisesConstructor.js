

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
};
class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }
    getSalary() {
        return this.salary.toFixed(2);
    }
    increaseSalary() {
        this.salary = this.salary * 1.1;
        return "Earnings increased by 10%"
    }
    getData() {
        return (this.name + " " + this.surname + " " + this.salary.toFixed(2) + " $ salary");
    }
};

class Developer extends Employee{
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }
    getSpecialization() {
        return this.specialization;
    }
};
class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }
    getDepartment() {
        return this.department;
    }
};
var employee1 = new Employee("Vladan", "Cupric", "developer", 1200);
var developer1 = new Developer("Zoran", "Burovic", "C++ developer", 2300, "Back End Mobile APP");
var manager1 = new Manager("Stefan", "Kostov", "manager", 2000, "sales");
console.log(employee1.salary);
console.log(manager1.increaseSalary());
console.log(manager1.getData());
console.log(Manager);