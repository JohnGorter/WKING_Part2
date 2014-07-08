
//Immediate Invoked Function Expression

function save(){
    
    // opvragen van elementen
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var date = document.getElementById("date").value;
    var score = document.getElementById("score").value;
    
    console.log("de invoer was " + title + ", " + description.value);
    
    
    // manipuleren van elementen
    var list = document.getElementById("ullist");
    list.innerHTML += "<li><span class='visible'>" + title + "</span><span>" + description + "</span><span>"
                       + date + "</span><span>" + score + "</span></li>";
    
}

function getDetails(){
   var element =  window.event.srcElement || window.event.target;
   var descri = element.nextSibling;
   var date = descri.nextSibling;
   var score = date.nextSibling;
   document.getElementById("details_title").innerHTML = element.innerText + " <small>"
                                                        + score.innerText + "</small>";
   document.getElementById("details_description").innerHTML = descri.innerText;
}


// reageren op events

