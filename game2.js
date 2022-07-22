
$(function() {
    $("#Enter").on('click', function(event) {    
        var text = $("#text-field").val();
        if (text.toLowerCase() === "eminem" ) { 
            alert("Correct");
        } else {
            alert("Sorry, the correct answer was eminem");
        }
    });
    });