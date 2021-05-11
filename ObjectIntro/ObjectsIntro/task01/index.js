function Student(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.getString = function () {
        return "Name: " + this.name + "\n" + "Age: " + this.age + "\n" + "ID: " + this.id;
    }
}


function Subject(name, description) {
    this.name = name;
    this.description = description;
    this.getString = function () {
        return "Name: " + this.name + "\n" + "Description: " + this.description;
    }
}


function Classroom(name) {
    this.name = name;
    this.subjects = [];
    this.students = [];
    this.addSubject = function (subj) {
        this.subjects.push(subj);
    }
    this.addStudent = function (stud) {
        this.students.push(stud);
    }
    this.toString = function () {
        var dataString = "";
        for (var i = 0; i < this.subjects.length; i++) {
            dataString += this.subjects[i].getString() + '\n';
        }
        for (var j = 0; j < this.students.length; j++) {
            dataString += this.students[j].getString() + "\n";
        }
        return this.name + "\n" + dataString;
    }
}


var bit = new Classroom("BIT");

var firstStud = new Student("Ecnomist", 47, 12345);
var secondStud = new Student("Vladan", 31, 54321);
var thirdStud = new Student("Aleksandar", 24, 53421);

var firstSubj = new Subject("Web", "Making Modern WebSites");
var secondSubj = new Subject("PP", "About programming principles");
var thirdSubj = new Subject("Industry talk", "About IT Industry");

bit.addStudent(firstStud);
bit.addStudent(secondStud);
bit.addStudent(thirdStud);

bit.addSubject(firstSubj);
bit.addSubject(secondSubj);
bit.addSubject(thirdSubj);

console.log(bit.toString())