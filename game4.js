$(function() {
    $("#Enter").on('click', function(event) {    
        var text = $("#text-field").val();
        if (text.toLowerCase() === "rihanna" ) { 
            alert("Correct");
        } else {
            alert("Sorry, the correct answer was rihanna");
        }
    });
    });