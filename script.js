







// box is the name of our variable - we just made that up

//document.getElementById - retrieves data

//We named our Element - "display" so (ElementByID) will now retrieve that data


var box = document.getElementById("display");


//box.value gets the button/number from the "addtoscreen" element

function addtoscreen(x){
    var box = document.getElementById("display");
    box.value+=x;
    if(x==="c"){
        box.value="";
    }
}


//however the "C" for clear kept appearing ... so we had to add an if statement
//if "x" equals C -- or the clear button is pressed --- show this "  ". (an empty string)



//This is a perfect example of an object inside an object:

//  Object 1:
//  function addtoscreen(x){
//  box.value=x;
//  }


//Object 2: ---------- Nested inside Object 1.
//  if(x==="c"){
//    box.value="";
//  }



function answer(){
    var box = document.getElementById("display");
    x=box.value;
    x=eval(x);
    box.value=x;
}



function power(){
    var box = document.getElementById("display");
    x=box.value;
    x=eval(x*x);   // Returns the square root of "x"
    box.value=x;
}


function backspace(){
    var box = document.getElementById("display");
    var num = box.val;
    var len = num.length - 1;
    var newNum = num.substring(0,len);
    box.value = newNum;
}
