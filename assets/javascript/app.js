$(document).ready(function(){
    //variables
    //===========================================
    var gifs = ['IronMan', 'Thor', 'Captian America', 'Hulk', 'Spiderman', 'Superman', 'WonderWoman', 'Aquaman', 'Batman', 'Thanos', ]
    var input = $('#input-val');
    var submit = $('#submit');
    
    //functions
    //creat boottons dynamically using jquery
    for (var i = 0; i < gifs.length; i++) {
        var btn = $('<button> ');
        btn.addClass('btn btn-success');
        btn.text(gifs[i]);
        $("#newDiv").append(btn);
    }
    $('.btn').on('click', function gifAjax() {
        var btnText = $(this).text().trim();
        //console.log(btnText);
        var apiKey = "ieBK2wrKLQbQF98crfuxu6LiIo1e4eu0";
        var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + btnText + "&api_key=" + apiKey + "&limit=5";
        //===========================================
    
        $.ajax({
                url: queryUrl,
                method: 'GET'
            })
            .then(function (response) {
                console.log(response);
    
                for (var j = 0; j < 11; j++) {
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
    //main process
    // $(submit).on('click', function () {
           
        
    //        gifs.push(input);
    //        //console.log(input);
    //        return false;
    //        //gifAjax();
    //     //========================================================
       
    // })
    // //===========================================
     });