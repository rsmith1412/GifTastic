$(document).ready(function() {
//Create array of strings, related to topic (comedians)
var topics = ["Dave Chappelle", "Richard Pryor", "Dane Cook", "Robin Williams", "Katt Williams",
	"Eddie Griffin", "Kevin Hart"
]

//var comedian = 

//App should take topics from array and create buttons in the HTML
var newButton = $("<button>");

//Create a for loop that appends a button for each string in array
for (var i = 0; i < topics.length; i++) {
	newButton, {
		text: topics[i],
		class: comics
		click: laugh();
		$("#comedians").append(newButton);
	}
	/*
	var comic = newButton.append(topics[i]);
	comic.innerHTML = topics[i];
	comic.attr("value", topics[i]);*/

}
/*
//When user clicks on button, 10 static, non-animated gif images from GIPHY API will be shown on page
$("#newButton").on("click", function() {

	//Creates a variable called queryURL that assigns this link
	var queryURL = "http://api.giphy.com/v1/gifs/q=" + person + "?api_key=dc6zaTOxFJmzC";

	$.ajax({
        url: queryURL,
        method: "GET"
      })
	  .done(function(response) {
          
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#comedians").prepend(gifDiv);
        }
    });
});

//When user clicks on GIPHY still, gif should animate. User clicks again, gif stops

//Under every gif the rating of the gif will be displayed

//Add form that takes user input , and adds to topics array.

//function call that takes each topic in array, and remakes the buttons on the page 
});