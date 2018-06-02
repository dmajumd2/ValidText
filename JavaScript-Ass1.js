
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

var clicks = 0;
var arrayText1;
var arrayText2;
var clicks = 0;

document.querySelector(domStrings.save).addEventListener('click', function(){
    var unameValidation, elem;
    if(document.querySelector(domStrings.username).value === ""){
       var h = document.getElementById("uname");
        clicks += 1;
        if(clicks <= 1){
            h.insertAdjacentHTML("afterend", "<p><span style='color:red'>Please enter the username</span></p>");
        }
    }

    if(document.querySelector(domStrings.username).value === ""){
        var h = document.getElementById("uname");
         clicks += 1;
         if(clicks <= 1){
             h.insertAdjacentHTML("afterend", "<p><span style='color:red'>Please enter the username</span></p>");
         }
     }

     if(document.querySelector(domStrings.username).value === ""){
        var h = document.getElementById("uname");
         clicks += 1;
         if(clicks <= 1){
             h.insertAdjacentHTML("afterend", "<p><span style='color:red'>Please enter the username</span></p>");
         }
     }
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
            console.log(arrayText2);
            document.getElementById("text2").value = arrayText2;
            }, 2000 + offset1);    
       offset1 += 2000;
      });
});