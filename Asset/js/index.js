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
      alert("email or pass not matched");
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
        if(event.target.id=="adminUpdate")
        {
          $('.adminStdUpdate').show();
          $('.adminSection').hide();

        }

    });
});


function adminLogin(){
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
    var studentData=document.getElementById("studentData");
    console.log(studentList);
    studentList.forEach(function(student) {
      var row = document.createElement("tr");
      console.log(row);
      
      var nameCell = document.createElement("td");
      nameCell.textContent = student.name;
      row.appendChild(nameCell);

      var rollCell = document.createElement("td");
      rollCell.textContent = student.roll;
      row.appendChild(rollCell);

      var deptCell = document.createElement("td");
      deptCell.textContent = student.department;
      row.appendChild(deptCell);

      var phoneCell = document.createElement("td");
      phoneCell.textContent = student.phone;
      row.appendChild(phoneCell);

      studentData.appendChild(row);

      var actionsCell = document.createElement("td");

      var updateButton = document.createElement("button");
      updateButton.textContent = "Update";
      
      updateButton.addEventListener("click", function(event) {
      
        updateStudentData($(this).closest('tr').index());
        
        // var na=studentList[$(this).closest('tr').index()].name;
        // console.log(na);
      });
      actionsCell.appendChild(updateButton);

      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function(event) {
        var row = this.closest('tr');
        var rowIndex = Array.prototype.indexOf.call(row.parentNode.children, row);
        deleteStudentData(rowIndex);
        row.remove(); 
      });
      
      actionsCell.appendChild(deleteButton);

      row.appendChild(actionsCell);

      
      studentData.appendChild(row);
   });
 }

    // Update student data function
function updateStudentData(index) {
  
  console.log("Update student at index", index);

  var updatedName = studentList[index].name;
   var updatedRoll = studentList[index].roll;
  var updatedDept = studentList[index].department;
  var updatedPhn = studentList[index].phone;
  console.log(updatedName);
  console.log(updatedRoll);
  console.log(updatedDept);
  console.log(updatedPhn);

  document.getElementById("name3").value = updatedName;
  document.getElementById("roll3").value = updatedRoll;
  document.getElementById("dept3").value = updatedDept;
  document.getElementById("phn3").value = updatedPhn;

  $('.adminStdUpdate').show();
  $('.adminSection').hide();

  $('Button').click(function (event) 
    {
      if(event.target.id=='updateButton2')
      {
        var updatedName1 = document.getElementById("name3").value;
        console.log(updatedName1);
        var updatedRoll1 = document.getElementById("roll3").value;
       var updatedDept1 = document.getElementById("dept3").value;
       var updatedPhn1 = document.getElementById("phn3").value;

       updatedName = updatedName1;
       studentList[index].name = updatedName1;
       studentList[index].roll = updatedRoll1;
       studentList[index].department = updatedDept1;
       studentList[index].phone = updatedPhn1;
       console.log(studentList);


                    // var updatedName = document.getElementById("name2").value;
                    // var updatedRoll = document.getElementById("roll2").value;
                    // var updatedDept = document.getElementById("dept2").value;
                    // var updatedPhn = document.getElementById("phn2").value;

                    // loggedInStudent.name = updatedName;
                    // loggedInStudent.roll = updatedRoll;
                    // loggedInStudent.department = updatedDept;
                    // loggedInStudent.phone = updatedPhn;
        $('.adminSection').show();
        alert("Student data updated");
        $('.adminStdUpdate').hide();
        displayStudentData();
      }
    });

          

        

}

    // Delete student data function
function deleteStudentData(index) {
 
     
}




  