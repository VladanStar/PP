
var addButton = document.querySelector('.add-btn');
var arrOfStudents = [];
var arrPassed = [];
var arrFailed = [];

addButton.addEventListener('click', function (event) {

    // pokupiti podatke

    var data = getFormData();
    console.log(data.select);

    var name = nameInput(data.inputNameSurname);
    var surname = surnameInput(data.inputNameSurname);
    
    // validirati podatke
    validator(data);

    // napraviti objekte
    var student = new Student(name, surname);
    var subject = new Subject (data.select);
    var exam = new Exam (subject, student, data.inputGrade);

    arrOfStudents.push(exam);
    if (exam.hasPassed() == true) {      // TODO
        arrPassed.push(exam);
        var p = document.createElement('p');
        var text = document.createTextNode(exam.student.getStudentData() + ' ' + exam.grade);
        p.appendChild(text);
        document.getElementById('passed').appendChild(p);
    }else{
        arrFailed.push(exam);
        console.log(arrFailed);
        var p = document.createElement('p');
        var text = document.createTextNode(exam.student.getStudentData() + ' ' + exam.grade);
        p.appendChild(text);
        document.getElementById('failed').appendChild(p);

    }
    console.log(arrPassed.length);
    document.getElementsByClassName("exam-failed-percentage")[0].innerHTML = Math.floor(arrFailed.length/(arrPassed.length + arrFailed.length)*100) + '%';
    document.getElementsByClassName("exam-passed-count")[0].innerHTML = arrPassed.length;
    document.querySelector('.add-student-name').value = '';
    document.querySelector('.add-grade').value = '';
    failed.innerHTML = arrFailed.length;    
    passed.inerHTML = arrPassed.length;
});