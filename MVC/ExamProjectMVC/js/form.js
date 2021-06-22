
function getFormData(){
    var formData = {}
    formData.selectElement = document.querySelector('.add-subject')
    formData.selectedIndex = formData.selectElement.selectedIndex;
    formData.select = formData.selectElement.options[formData.selectedIndex].value;
    formData.inputNameSurname = document.querySelector('.add-student-name').value;
    formData.inputGrade = document.querySelector('.add-grade').value;
    formData.clearNameSurname = document.querySelector('.add-student-name');
    
    return formData;
}

var outputMessage1 = document.getElementById('output1');
var outputMessage2 = document.getElementById('output2');
var failed = document.getElementsByClassName("exam-failed-count")[0];
var passed = document.getElementsByClassName("exam-passed-count")[0];
var percentage = document.getElementsByClassName("exam-failed-percentage");

var nameInput = function (inputNameSurname) {
    for (var i = 0; i < inputNameSurname.length; i++) {
        var a = "";
        
        if (inputNameSurname[i] == " ") {
            a = inputNameSurname.slice(0, i);
            break;
        }
    }
    return a;
}

var surnameInput = function (inputNameSurname) {
    for (var j = 0; j < inputNameSurname.length; j++) {
        var b = "";
        if (inputNameSurname[j] == " ") {
            b = inputNameSurname.slice(j + 1);
            break;
        }
    }
    return b;
}

var error = {
    OK: 'OK',
    MISSING_DATA: 'Insert name and surname or grade',
}

function validator(formData) {
    if (formData.inputNameSurname == '') {
        outputMessage1.innerHTML = error.MISSING_DATA;
    } else {
      outputMessage1.innerHTML = error.OK;
    }
     if (formData.inputGrade == ''){
        outputMessage2.innerHTML = error.MISSING_DATA;
    }else{
        outputMessage2.innerHTML = error.OK;
    }
}
