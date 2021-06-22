const dataModulSubject = (() => {

    class Subject {
        constructor(name) {
            this.name = name;

        };
        getSubjectData() {
            return this.name;
        };

    }

    function createSubject(name) {
        const subject = new Subject(name);
        return subject;
    };

    //Exspose
    return {
        createSubject: createSubject
      
    }
})();

const webProgramiranje = dataModulSubject.createSubject('Web programiranje')

// console.log(webProgramiranje);
// console.log(sub.getSubjectData());



const dataModulStudent = (()=>{

    class Student{
        constructor(name,surname){
            this.name = name;
            this.surname = surname;
        }
        getStudentData(){
            return `Name: ${this.name} Surname: ${this.surname} `;
        }
    
    }
    function createStudent(name,surname){
        const student = new Student(name,surname);
    
        return student;
    }
    
    //Exspose
    return{
        createStudent:createStudent
    }
    
    })()
    
    
    const vladan = dataModulStudent.createStudent('Vladan','cupric');
    // console.log(vladan);
    
const dataModulExam = (() => {

    class Exam {
        constructor(subjectObj, studentObj, grade) {
            this.grade = grade;
            this.subjectObj = subjectObj;
            this.studentObj = studentObj;
        }
        getexamInfo() {
            return `Exam: ${this.subjectObj.getSubjectData()} ,  ${this.studentObj.getStudentData()} grade: ${this.grade}`;
        }
        hasPassed() {
            
            if (this.grade > 5) {
                return  true;
            } else {
                return false;
            }
        }

    }

    function createExam(subjectObj, studentObj, grade){
        const exam = new Exam(subjectObj, studentObj, grade);
        return exam;
    }
    return{
        createExam:createExam
    }

})();
// const webProgramiranje = dataModulSubject.createSubject('webProgramiranje')
// const vladan = dataModulStudent.createStudent('Vladan','Cupric');
console.log(webProgramiranje);
console.log(vladan);


const exam = dataModulExam.createExam(webProgramiranje,vladan,8);
console.log(exam.getexamInfo());
console.log(exam.hasPassed());

