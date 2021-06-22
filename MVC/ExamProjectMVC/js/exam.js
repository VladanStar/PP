function Exam(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
}

Exam.prototype.getExamInfo = function() {
    return this.subject.name + ", " + this. student.getStudentData() + ", " + this.grade;
}

Exam.prototype.hasPassed = function() {
    return this.grade > 5;
}