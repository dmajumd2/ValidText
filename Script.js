var users = [];
var counter = 0;
if(localStorage.a_users) {
    users = JSON.parse(localStorage.a_users);
    for(var i = 0; i < users.length; i++){
        load(users);
    }
    //console.log(counter);
    
    
}

var domStrings = {
    username: '#uname',
    password: '#pwd',
    email: '#email',
    location: '#loc',
    company: '#comp',
    save: '#btn',

    inputType1: '#text1',
    inputType2: '#text2',
    buttonMid: '.btn',
    buttonLeft: '.btnLeft',
    buttonRight: '.btnRight'
};

var arrayText1;
var arrayText2;
var clicks = 0;

var btn = 0;
var user = document.getElementById('uname');

document.querySelector(domStrings.save).addEventListener('click', function(){
    
    if(document.querySelector(domStrings.username).value === ""){
        var h = document.getElementById("uname");
        clicks += 1;
        if(clicks <= 1){
            h.insertAdjacentHTML("afterend", "<p id='un'><span style='color:red'>Please enter the username</span></p>");
            clicks--;
        }
    }

     if(document.getElementById('uname').value && document.getElementById('un')){
        document.getElementById("un").outerHTML = "";
     }

    if(document.querySelector(domStrings.password).value === ""){
        var h1 = document.getElementById("pwd");
          clicks += 1;
          if(clicks <= 1){
             h1.insertAdjacentHTML("afterend", "<p id = 'pd'><span style='color:red'>Please enter the password</span></p>");
             clicks--;
         }
     } 
     if(document.getElementById('pwd').value && document.getElementById('pd')){
        document.getElementById("pd").outerHTML = "";
     }

     if(document.querySelector(domStrings.email).value === ""){
        var h = document.getElementById("email");
         clicks += 1;
         if(clicks <= 1){
             h.insertAdjacentHTML("afterend", "<p id='em'><span style='color:red'>Please enter the email</span></p>");
             clicks--;
         }
     }
     if(document.getElementById('email').value && document.getElementById('em')){
        document.getElementById("em").outerHTML = "";
     }
       

     if(document.querySelector(domStrings.location).value === ""){
        var h = document.getElementById("loc");
         clicks += 1;
         if(clicks <= 1){
             h.insertAdjacentHTML("afterend", "<p id='lo'><span style='color:red'>Please enter the location</span></p>");
             clicks--;
         }
     } 
     if(document.getElementById('loc').value && document.getElementById('lo')){
        document.getElementById("lo").outerHTML = "";
     } 

     if(document.querySelector(domStrings.company).value === ""){
        var h = document.getElementById("comp");
         clicks += 1;
         if(clicks <= 1){
             h.insertAdjacentHTML("afterend", "<p id='co'><span style='color:red'>Please enter the company</span></p>");
             clicks--;
         }
     } 
     if(document.getElementById('comp').value && document.getElementById('co')){
        document.getElementById("co").outerHTML = "";
     }
     
     if(document.getElementById("male").checked != true || document.getElementById("female").checked != true){
        var h = document.getElementById("gender");
         clicks += 1;
         if(clicks <= 1){
             h.insertAdjacentHTML("afterend", "<p id='ge'><span style='color:red'>Please select gender</span></p>");
             clicks--;
         }
     }
     if((document.getElementById('male').checked || document.getElementById('female').checked)  && document.getElementById('ge')){
        document.getElementById("ge").outerHTML = "";
     }
     clicks++;
     clicks++;

   
    btn += 1;
    
    var count = 0;
        var gender;
        if(document.getElementById("male").checked == true){
            gender = 'male';
        }
        if(document.getElementById("female").checked == true){
            gender = 'female';
        }

  
    if(document.querySelector(domStrings.username).value != "" && document.querySelector(domStrings.password).value != ""
       && document.querySelector(domStrings.email).value != "" &&
       document.querySelector(domStrings.location).value != "" &&
       document.querySelector(domStrings.company).value != "" &&
       (document.getElementById("male").checked == true || document.getElementById("female").checked == true)
    )
       {
        var user = {
            'username':document.getElementById('uname').value,
            'password':document.getElementById('pwd').value,
            'email': document.getElementById('email').value,
            'location': document.getElementById('loc').value,
            'company': document.getElementById('comp').value,
            'gender': gender    
        };
        users.push(user);
        localStorage.a_users = JSON.stringify(users);
        //console.log(localStorage.a_users);
         
         //if(localStorage.a_users) {
            users = JSON.parse(localStorage.a_users);
            //counter += 1;
            //console.log(users);
             load(users);

            // (function(){
            //      users = JSON.parse(localStorage.a_users);
            //      var table, row, cell;
            //      table = document.getElementById('table');
            //      counter += 1;
            //             row = table.insertRow(counter);
            //             console.log(row);
            //             var i = 0;

            //           for (var prop in users[i]){
            //               console.log(prop);
            //               cell = row.insertCell();
            //               cell.innerText = users[i][prop];
            //               }
            // })();


      //}
      
    
    }     
    
  
 });

 function load(users) {

    //console.log(counter);
         //users = JSON.parse(localStorage.a_users);
                 var table, row, cell;
                 table = document.getElementById('table');
                 counter += 1;
                        row = table.insertRow(counter);
                        var i = 0;
                      for (var prop in users[i]){
                          cell = row.insertCell();
                          cell.innerText = users[i][prop];
                }
  }  

//second part----------------------------------------
document.querySelector(domStrings.inputType1).addEventListener('keyup', function(){
    var val1 = document.querySelector(domStrings.inputType1).value;
    arrayText1 = val1.split('');

});

document.querySelector(domStrings.inputType2).addEventListener('keyup', function(){
    var val2 = document.querySelector(domStrings.inputType2).value;
    arrayText2 = val2.split('');
    
});

var countingMidClick = 0;
var flag = true;
function stop(){
    flag = false;  
}

var leftArray = [];
var newData = [];
var leftObject;
var rightObject;
document.querySelector(domStrings.buttonLeft).addEventListener('click', function(){
    clearInterval(leftObject);
    
    flag = true;
    var offset = 0;
    var counter = 0;
    var array = [];
    var left;
    
    left = document.getElementById("text1").value;
    leftArray = left.split('');
    var index=0;
         leftObject = setInterval(function() {
                document.getElementById('text2').value +=  left[0]; 
                left = left.slice(1, left.length);
                console.log(left);
                document.getElementById('text1').value = left;
                if(index == left.length){
                     clearInterval(leftObject);
                }
        }, 1000);
});


document.querySelector(domStrings.buttonMid).addEventListener('click', function(){
    clearInterval(leftObject);
})


document.querySelector(domStrings.buttonRight).addEventListener('click', function(){
    clearInterval(leftObject);
    flag = true;
    var offset1 = 0;
    var counter = 0;
    var array1 = [];
    var arrT;
    var right;
    arrT = document.getElementById("text2").value;
    right = document.getElementById("text2").value;
    leftArray = right.split('');
    counter += 1;
   
    var index=0;
    leftObject = setInterval(function() {
                document.getElementById('text1').value = right[right.length-1] + document.getElementById('text1').value; 
                right = right.slice(0, right.length-1);
                document.getElementById('text2').value = right;
                if(index == right.length){
                     clearInterval(leftObject);
                }
        }, 1000);
});