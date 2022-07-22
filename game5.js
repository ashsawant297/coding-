$(function() {
    $("#Enter").on('click', function(event) {    
        var text = $("#text-field").val();
        if (text.toLowerCase() === "selena gomez" ) { 
            alert("Correct");
        } else {
            alert("Sorry, the correct answer was selena gomez");
        }
    });
    });