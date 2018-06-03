
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
     
     if(document.getElementById("male").checked != true && document.getElementById("female").checked != true){
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

     var users = [];
     if(localStorage.a_users) {
        users = JSON.parse(localStorage.a_users);
        //displayUsers(users);
    }

     
        var gender;
        if(document.getElementById("male").checked == true){
            console.log('male');
            gender = 'male';
        }
        if(document.getElementById("female").checked == true){
            console.log('female');
            gender = 'female';
        }
    
        var user = {
            'username':document.getElementById('uname').value,
            'password':document.getElementById('pwd').value,
            'email': document.getElementById('email').value,
            'location': document.getElementById('loc').value,
            'company': document.getElementById('comp').val1,
            'gender': gender
            
            
        };
        users.push(user);
        localStorage.a_users = JSON.stringify(users);
  
});







document.querySelector(domStrings.inputType1).addEventListener('keyup', function(){
    var val1 = document.querySelector(domStrings.inputType1).value;
    arrayText1 = val1.split('');

});

document.querySelector(domStrings.inputType2).addEventListener('keyup', function(){
    var val2 = document.querySelector(domStrings.inputType2).value;
    arrayText2 = val2.split('');
    
});

document.querySelector(domStrings.buttonLeft).addEventListener('click', function(){
        var offset = 0;
        var counter = 0;
        var array = [];
        var str = '';

        arrayText1.forEach(function(number){
            setTimeout(function(){
                document.getElementById("text2").value += number;
                arrayText1.splice(0,1);
                document.getElementById("text1").value = arrayText1;
                }, 2000 + offset);    
           offset += 2000;
          });
});

document.querySelector(domStrings.buttonRight).addEventListener('click', function(){
    var offset1 = 0;
    var counter = 0;
    var array = [];

    arrayText2.forEach(function(number){
        setTimeout(function(){
            document.getElementById("text1").value += number;
            arrayText2.splice(0,1);
            //console.log(arrayText2);
            document.getElementById("text2").value = arrayText2;
            }, 2000 + offset1);    
       offset1 += 2000;
      });
});