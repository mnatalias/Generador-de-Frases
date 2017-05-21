function requestQuote () {
    $.ajax({
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous",
        type: "POST",
        data: {},
        dataType:'json',
        headers: {
            "X-Mashape-Key": "DesfSOxUFKmship1oUyigDpPuDkwp1alRZ5jsnHgbPWVpRKNEj",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
        },
    }) 
        .done(function(json){ 
            $("#cita").text(json.quote);
            $("footer").text(json.author);
            $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + json.quote);
        })
        .fail(function( xhr, status, errorThrown ) {
            alert( "Sorry, there was a problem!" );
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.dir( xhr );
        });
};

$(document).ready(function() {
    $("#nuevaCita").on("click", requestQuote);
});