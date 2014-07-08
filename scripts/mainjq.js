
  function validate(inp, level){
    var input = $(inp);
    var parent = input.parent();
    if (level == 2) parent = parent.parent();
        
    if (input.val() == "") {
         input.focus();
         parent.addClass("has-error");
         parent.append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
         return true;
    } else { 
        parent.removeClass("has-error");
        $(".glyphicon", parent).remove();

    }
    return false;
  }

   $(function(){
    
        $("#btnSave").click(function() {
            
            if (validate("#team1", 2)) return;
            if (validate("#team2", 2)) return;
            if (validate("#description", 1)) return;
            if (validate("#date", 1)) return;
            if (validate("#scoreteam1", 2)) return;
            if (validate("#scoreteam2", 2)) return;
           
             
             $("#description").parent().removeClass("has-error");
             $("#date").parent().removeClass("has-error");
             $("#scoreteam1").parent().parent().removeClass("has-error");
             
            $("<li>").append($("<span>")
                             .addClass("visible").text($("#team1").val() + "-" + $("#team2").val()))
                             .append($("<span>").text($("#description").val()))
                             .append($("<span>").text($("#scoreteam1").val() + "-" + $("#scoreteam2").val()))
                             .append($("<span>").text($("#date").val()))
                    .appendTo($("#ullist"));            
        });
        
        $("#ullist").click(function(){
            $("#details_title").html($(window.event.target).text() + " <small> [score " + $(window.event.target).next().next().text() + "]</small>");
            $("#details_description").text($(window.event.target).next().text());
         });
        
       // $("#btnCheck").click(function(){$("input:checked").each(function(){ console.log(this.value);})});
        
    });
   
   