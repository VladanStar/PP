function Exam(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
}
Exam.prototype.getExamInfo = function () {
    return this.subject.name + ', ' + this.student.getStudentData();
}
Exam.prototype.hasPassed = function () {
    if (this.grade > 5) {
        document.getElementById('output2').innerHTML = 'Student has passed the exam';
        return true;
    } else {
        document.getElementById('output2').innerHTML = "Student has not passed the exam";
        return false;
    }
}