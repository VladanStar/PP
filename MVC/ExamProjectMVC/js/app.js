var subjList = ["WEB", "JavaScript", "SPA"];
var createdSubjectList = [];
var studentList = [];
var examList = [];
var passedList = [];
var failedList = [];


var chosenSubjectInput = document.querySelector("#choose-subject");
var gradeInput = document.querySelector(".grade-input");
var nameSurnameInput = document.querySelector(".name-input");

function createSubject(subjName) {
    subjList.forEach(function (subjName, index) {
        var subjOption = document.createElement("option");
        subjOption.value = index;
        subjOption.textContent = subjName;
        chosenSubjectInput.appendChild(subjOption);
        var createdSubject = new Subject(subjName);
        createdSubjectList.push(createdSubject);
    })
}

function createStudent() {
    var grade = gradeInput.value;
    var nameSurname = nameSurnameInput.value;
    var nameSurnameSplit = nameSurname.split(" ");
    var name = nameSurnameSplit[0];
    var surname = nameSurnameSplit[1];

    surname = surname || "InsertSurname";

    validateData(name, surname, grade);

    var createdStudent = new Student(name, surname);
    studentList.push(createdStudent);

    nameSurnameInput.value = "";
}

function createExam() {
    var subjIndex = document.querySelector("#choose-subject").value;
    var chosenSubject = createdSubjectList[subjIndex];

    var createdStudent = {};
    var grade = gradeInput.value;

    studentList.forEach(function (student) {
        createdStudent = student;
    });

    var createdExam = new Exam(chosenSubject, createdStudent, grade);
    examList.push(createdExam);

    if (createdExam.hasPassed()) {
        passedList.push(createdExam);
    } else {
        failedList.push(createdExam);
    }

    gradeInput.value = "";
}

function update() {
    updateList(examList);
    updateStatistics(passedList, failedList, examList);
}

function getCurrentMonth() {
    var currentDate = new Date;
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var currentMonth = monthArray[currentDate.getMonth()];
    return currentMonth;
}

function updateCurrentMonth() {
    var statDate = document.querySelector("#statistic-date");
    statDate.textContent = getCurrentMonth();
}

function resetList(li) {
    var ul = document.querySelector("#passed-student-list");
    ul.removeChild(li);
}

var xButton = document.querySelector(".btn-x");

updateCurrentMonth();
createSubject();

var addButton = document.querySelector("#add-button");
addButton.addEventListener("click", function () {

    createStudent();
    createExam();
    update();
});

var studentsLists = document.querySelector(".students-lists");

studentsLists.addEventListener("click", function (event) {
    if (event.target.className === "btn-x") {
        var liElement = event.target.parentElement.parentElement;
        resetList(liElement);
    }
})




