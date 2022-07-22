
$(function() {
    $("#Enter").on('click', function(event) {    
        var text = $("#text-field").val();
        if (text.toLowerCase() === "ariana grande" ) { 
            alert("Correct");
        } else {
            alert("Sorry, the correct answer was ariana grande");
        }
    });
    });