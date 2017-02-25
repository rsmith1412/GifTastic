$(document).ready(function() {
//Create array of strings, related to topic (comedians)
var topics = ["tiger", "cheetah", "giraffe", "cat", "dog",
	"shark", "turtle", "cow"];

//App should take topics from array and create buttons in the HTML

//Create a for loop that appends a button for each string in array
for (var i = 0; i < topics.length; i++) {

	console.log(topics[i]);
	//Creates button element
	var newButton = $("<button>");
	//Adds class to button element
	newButton.addClass("moo-button");
	//Adds data-name to button element
	newButton.attr("data-name", topics[i]);
	//Adds name of comedian to button element
	newButton.text(topics[i]);
	//Takes topic from array and creates button in the HTML
	$("#animal-buttons-div").append(newButton);

}	

//When user clicks on button, 10 static, non-animated gif images from GIPHY API will be shown on page
$("button").on("click", function() {

	var animal = $(this).attr("data-name");

	//Creates a variable called queryURL that assigns this link
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10&rating=pg";

	$.ajax({
        url: queryURL,
        method: "GET"
      })
	  .done(function(response) {
          
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");

          var rating = results[i].rating;

          console.log(results[i].images.fixed_height.url);

          //Under every gif the rating of the gif will be displayed
          var p = $("<p>").text("Rating: " + rating);

          var animalImage = $("<img>");
          animalImage.attr("src", results[i].images.fixed_height.url);
          animalImage.attr("data-state", "still");


          gifDiv.prepend(p);
          gifDiv.prepend(animalImage);

          $("#zoo").prepend(gifDiv);  
        }
    });

});


//When user clicks on GIPHY still, gif should animate. User clicks again, gif stops

//Add form that takes user input , and adds to topics array.
/*$("#search").on('click', function() {

		var qID = $('#searchTerm').val();

//function call that takes each topic in array, and remakes the buttons on the page */
})