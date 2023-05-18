var studentList = [];
// localStorage.setItem('students', "");
function register() {
    var newObject = new Object();
    newObject.name=document.getElementById("name").value;
    newObject.roll=document.getElementById("roll").value;
    newObject.department=document.getElementById("dept").value;
    newObject.phone=document.getElementById("phn").value;
    newObject.email=document.getElementById("email1").value;
    newObject.password=document.getElementById("Password").value;

studentList.push(newObject);
console.log(studentList);

}

function goBack(){
    console.log(studentList);
}

function saveObjects() {
    localStorage.setItem('students', JSON.stringify(studentList));
}
  
function login(){
    var checkEmail = document.getElementById("email").value;
    var checkPas = document.getElementById("Password1").value;
    var student={
        
    }
    alert(checkEmail);
    login1(checkEmail,checkPas);
}

function login1(email, password) {
    
    // alert(email);
    // alert(password);

    // let datas=localStorage.students;
    // alert(datas);
    // datas.forEach(data => {
    //     alert(data.email);
    //     if(data.email===checkEmail)
    //     {
    //         alert(data.email);
    //     }
    // });
    let loggedInUser = students.find(data => data.email === email);
    alert("loggedInUser");
  
    if (loggedInUser && loggedInUser.password === password) {
      
      alert("login successfull")
    } else {
      
      alert("email or pass not matched")
    }
}

$(document).ready(function(){
    $('.btns #btn1').click(function () {
        $('.reg').show();
        $('.nav').hide();
    });
    $('.btns #btn2').click(function () {
        $('.login').show();
        $('.nav').hide();
    });

    // $('button').click(function(){
    //     $('.nav').show();
    // });
});