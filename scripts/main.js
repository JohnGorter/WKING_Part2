
//Immediate Invoked Function Expression

function save(){
    
    // opvragen van elementen
    var title = document.getElementById("title").value;
    var description = document.getElementById("description");
    var date = document.getElementById("date");
    var score = document.getElementById("score");
    
    console.log("de invoer was " + title + ", " + description.value);
    
    
    // manipuleren van elementen
    var list = document.getElementById("ullist");
    list.innerHTML += "<li>" + title + "</li>";
    
}

function getDetails(){
   var element =  window.event.srcElement || window.event.target;
   document.getElementById("details_title").innerHTML = element.innerText;

    
}


var divjohn = document.getElementById("john");
divjohn.addEventListener("click", function(){ alert('push the div');}, true);




// reageren op events

