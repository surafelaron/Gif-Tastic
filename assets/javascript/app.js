
$(document).ready(function () {
    //variables
    //===========================================
    var gifs = ['IronMan', 'Thor', 'Captian America', 'Hulk', 'Spiderman', 'Superman', 'WonderWoman', 'Aquaman', 'Batman', 'Thanos', ]
    // var input = $('#input-val').val().trim();
    var submit = $('#submit');

    //functions
    $(submit).on('click', function (e) {
     
        arbit = $("input-val").val();
        gifs.push(arbit)
        console.log(gifs);

        //     //========================================================

    })
    //===========================================
    //creat boottons dynamically using jquery
    for (var i = 0; i < gifs.length; i++) {
        var btn = $('<button> ');
        btn.addClass('btn btn-success');
        btn.text(gifs[i]);
        $("#newDiv").append(btn);
    }
    $('.btn-success').on('click', function gifAjax() {
        $('#image-avengers').empty();
        var btnText = $(this).text().trim();
        //console.log(btnText);
        var apiKey = "ieBK2wrKLQbQF98crfuxu6LiIo1e4eu0";
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + btnText + "&api_key=" + apiKey + "&limit=10";
        //===========================================

        $.ajax({
                url: queryUrl,
                method: 'GET'
            })
            .then(function (response) {
                console.log(response);

                for (var j = 0; j <response.data.length; j++) {
                    var myAvengers = response.data;
                    var imageRating = myAvengers[j].rating;
                    console.log(imageRating);
                    var image = $("<img>");
                    var rating = $("<p>");
                    var imageDiv = $("<div>");
                    // add image attributes
                    image.attr("src", myAvengers[j].images.fixed_height_still.url);
                    image.attr("data-still", myAvengers[j].images.fixed_height_still.url);
                    image.attr("data_animate", myAvengers[j].images.fixed_height.url);
                    image.attr("data_state", "still");
                    image.attr("class", "gif");
                    //add image rating to the p tag
                    rating.text("Rating : " + imageRating);

                    //append the tags to images div
                    imageDiv.append(image);
                    imageDiv.append(rating);
                    $("#image-avengers").prepend(imageDiv);
                }
            });
    })

   
});