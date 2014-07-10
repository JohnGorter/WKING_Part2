
  function getProgess() {
    var progress = 0;
    if ($("#team1").val() !== "" && $("#team2").val() !== "") progress += 25;
    if ($("#description").val() !== "") progress += 25;
    if ($("#date").val() !== "") progress += 25;
    if ($("#scoreteam1").val() !== "" && $("#scoreteam2").val() !== "") progress += 25;
    return progress;
  }

   $(function(){
         // use the enter key to mimic a tab key
         $("#myModal").keypress(function (){
            if (window.event.keyCode == 13){
                $(':input:eq(' + ($(':input').index($(":focus")) + 1) + ')').focus();
                }
            });

            
        $('#myModal').on('shown.bs.modal', function () {
            $("#team1").focus();
        });
            
        $("#gameform").submit(function() {
                         
            $("<li>").append($("<span>")
                             .addClass("visible").text($("#team1").val() + "-" + $("#team2").val()))
                             .append($("<span>").text($("#description").val()))
                             .append($("<span>").text($("#scoreteam1").val() + "-" + $("#scoreteam2").val()))
                             .append($("<span>").text($("#date").val()))
                    .appendTo($("#ullist"));
                    
            
            
            // clear the form
            $("#team1").val("").focus();
            $("#team2").val("");
            $("#description").val("");
            $("#date").val("");
            $("#scoreteam1").val("");
            $("#scoreteam2").val("");
            $("#progressbar").css('width', '0%').text('');
            
            // game is saved
            var $alert = $("<DIV class='alert alert-success'><button class='close' data-dismiss='alert'>&times</button><strong>Update:</strong> a new game is inserted!</DIV>");
            $("#footer").append($alert);
            $alert.delay(5000).fadeOut('slow');
            
            
            // stop the form from submitting.
            window.event.preventDefault();
            window.event.stopPropagation();
            
            // hide the dialog
            $("#myModal").modal("hide");
        });
        
        // function to show the details of the game in the details panel
        $("#ullist").click(function(){
            $("#details_title").html($(window.event.target).text() + " <small> [score " + $(window.event.target).next().next().text() + "]</small>");
            $("#details_description").text($(window.event.target).next().text());
         });

        // function to hook change events to update the progress bar
        $(":input").focusout(function(){
            $("#progressbar").css('width', getProgess() + "%").text(getProgess() + "% of the form completed");
            });
        
    });
   
   