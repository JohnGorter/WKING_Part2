
var games = new Array();

  function getProgess() {
    var progress = 0;
    if ($("#team1").val() !== "" && $("#team2").val() !== "") progress += 25;
    if ($("#description").val() !== "") progress += 25;
    if ($("#date").val() !== "") progress += 25;
    if ($("#scoreteam1").val() !== "" && $("#scoreteam2").val() !== "") progress += 25;
    return progress;
  }
        
   $(function(){
    
        var list = $("#list")[0];
        list.ondragover = function () { return false;}
        list.ondragend = function() { return false;}
        list.ondrop = function(e) {
            
            var reader = new FileReader();
            
            reader.onload = function(e){
               var data = JSON.parse(e.target.result);
               for (d in data)
                 insertGame(data[d], true); 
                
                };
                
            reader.readAsText(e.dataTransfer.files[0]);
            
            return false;
        }
    
        // load the games from localStorage
        if ('games' in window.localStorage) {
            games = JSON.parse(window.localStorage['games']);
            for (g in games)
                insertGame(games[g], false);
        }
    
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
            
            var game = {
                'team1':$("#team1").val(),
                'team2':$("#team2").val(),
                'description':$("#description").val(),
                'date':$("#date").val(),
                'scoreteam1':$("#scoreteam1").val(),
                'scoreteam2':$("#scoreteam2").val()
                };
                
           insertGame(game, true);
            
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
   
   
   // adds a row to the table for the game..
   function insertGame(game, addToLS){
    
    if (addToLS) {
       games.push(game);
      window.localStorage['games'] = JSON.stringify(games);
    }
    
    $("<tr>").append(           
               $("<td>").append($("<span>")
                             .addClass("visible").text(game.team1 + "-" + game.team2))
                             .append($("<span>").text(game.description))
                             .append($("<span>").text(game.scoreteam1 + "-" + game.scoreteam2))
                             .append($("<span>").text(game.date))
                             .append($("<span class='glyphicon glyphicon-trash'></span>").click(function(){
                                
                                games.splice(game, 1);
                                window.localStorage['games'] = JSON.stringify(games);
                                $(this).parent().parent().remove();
                                
                                }))
            ).appendTo($("#ullist"));
    
   }
   