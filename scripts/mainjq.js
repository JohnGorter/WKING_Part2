
   $(function(){
    
        $("#btnSave").click(function() {
            $("<li>").append($("<span>").addClass("visible").text($("#title").val())).append($("<span>").text($("#description").val())).append($("<span>").text($("#score").val())).append($("<span>").text($("#date").val())).appendTo($("#ullist"));            
        });
        
        $("#ullist").click(function(){
            $("#details_title").html($(window.event.target).text() + " <small>" + $(window.event.target).next().next().text() + "</small>");
            $("#details_description").text($(window.event.target).next().text());
         });
        
       // $("#btnCheck").click(function(){$("input:checked").each(function(){ console.log(this.value);})});
        
    });
   
   