var studentList = [];
function register() {
    var newObject = new Object();
    newObject.name=document.getElementById("name").value;
    newObject.roll=document.getElementById("roll").value;
    newObject.department=document.getElementById("dept").value;
    newObject.phone=document.getElementById("phn").value;
    newObject.email=document.getElementById("email1").value;
    newObject.password=document.getElementById("password").value;
    studentList.push(newObject);
    console.log(studentList);

} 
function login(){

    let eml=document.getElementById("email").value;
    let pass=document.getElementById("Password1").value;
    console.log(eml);
    console.log(pass);
    var loggedInStudent=studentList.find(function(student){
    return student.email=== eml && student.password===pass;
    });

   if (loggedInStudent) {
     console.log("Login successful for student:", loggedInStudent);

    document.getElementById("loggedInName").textContent = loggedInStudent.name;
    document.getElementById("name2").value = loggedInStudent.name;
    document.getElementById("roll2").value = loggedInStudent.roll;
    document.getElementById("dept2").value = loggedInStudent.department;
    document.getElementById("phn2").value = loggedInStudent.phone;

    
    $('Button').click(function (event) {
                if(event.target.id=='log')
                {
                    $('.logInSucces').show();
                    $('.login').hide();
                }
                if(event.target.id=='back3')
                {
                    $('.nav').show();
                    $('.logInSucces').hide();
                }
                if(event.target.id=='updateButton')
                {
                    var updatedName = document.getElementById("name2").value;
                     var updatedRoll = document.getElementById("roll2").value;
                    var updatedDept = document.getElementById("dept2").value;
                    var updatedPhn = document.getElementById("phn2").value;

                    loggedInStudent.name = updatedName;
                    loggedInStudent.roll = updatedRoll;
                    loggedInStudent.department = updatedDept;
                    loggedInStudent.phone = updatedPhn;
                }
                
            });

    } else {
      alert("email or pass not matched")
    }   
}

$(document).ready(function(){
    
    $('Button').click(function (event) 
    {
       if(event.target.id=='btn1')
        {
            $('.reg').show();
            $('.nav').hide();
        }
        if(event.target.id=='btn2')
        {
            $('.login').show();
            $('.nav').hide();
        }
        if(event.target.id=='back')
        {
            $('.nav').show();
            $('.reg').hide();
        }
        if(event.target.id=='back2')
        {
            $('.nav').show();
            $('.login').hide();
        }
        if(event.target.id=='btn3')
        {
            $('.adminLogin').show();
            $('.nav').hide();

        }
        if(event.target.id=="updateStudent")
        {
           

        }

    });
});


function adminLogin() {
    let adminEmail = document.getElementById("adminEmail").value;
    let adminPassword = document.getElementById("adminPassword").value;
  
    if (adminEmail === "admin@example.com" && adminPassword === "111") {
      console.log("Admin login successful!");
  
      
      $('.adminSection').show();
      $('.adminLogin').hide();

      displayStudentData();
    } else {
      alert("Admin email or password is incorrect");
    }
  };


  function displayStudentData() {
    var table = document.getElementById("studentTable");
  
    // Clear the table body
    var tbody = table.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
  
    // Populate the table with student data
    for (var i = 0; i < studentList.length; i++) {
      var student = studentList[i];
  
      var row = tbody.insertRow(i);
      row.insertCell(0).textContent = student.name;
      row.insertCell(1).textContent = student.roll;
      row.insertCell(2).textContent = student.department;
      row.insertCell(3).textContent = student.phone;
      row.insertCell(4).textContent = student.email;
  
      var actionsCell = row.insertCell(5);
      actionsCell.innerHTML = '<button onclick="updateStudent(' + i + ')">Update</button> <button onclick="deleteStudent(' + i + ')">Delete</button>';
    }
  }

  function updateStudent(index) {
    var student = studentList[index];
  
    // Get the modal element
    var modal = document.getElementById("updateModal");
  
    // Get the form and its elements
    var form = modal.querySelector("form");
    var nameInput = form.querySelector("#updateName");
    var rollInput = form.querySelector("#updateRoll");
    var departmentInput = form.querySelector("#updateDept");
    var phoneInput = form.querySelector("#updatePhn");
  
    // Pre-fill the form with the current student data
    nameInput.value = student.name;
    rollInput.value = student.roll;
    departmentInput.value = student.department;
    phoneInput.value = student.phone;
  
    // Show the modal
    modal.style.display = "block";
  
    // Handle form submission
    form.onsubmit = function(e) {
      e.preventDefault(); // Prevent form submission
  
      // Update the student object
      student.name = nameInput.value;
      student.roll = rollInput.value;
      student.department = departmentInput.value;
      student.phone = phoneInput.value;
  
      // Close the modal
      modal.style.display = "none";
  
      // Refresh the table
      displayStudentData();
    };
}
  
  