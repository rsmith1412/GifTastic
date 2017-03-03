$(document).ready(function() {
//Create array of strings, related to topic (animals)
var topics = ["tiger", "cheetah", "giraffe", "cat", "dog",
	"shark", "turtle", "cow"];

//App should take topics from array and create buttons in the HTML
//Create function to show buttons already created plus new buttons
function renderButtons() {
	//Empties buttons div, so it can later be repopulated
	$("#animal-buttons-div").empty();
	//Create a for loop that appends a button for each string in array
	for (var i = 0; i < topics.length; i++) {

		console.log(topics[i]);
		//Creates button element
		var newButton = $("<button class='meow'>");
		//Adds class to button element
		//newButton.addClass("moo-button");
		//Adds data-name to button element
		newButton.attr("data-name", topics[i]);
		//Adds name of animal to button element
		newButton.text(topics[i]);
		//Takes topic from array and creates button in the HTML
		$("#animal-buttons-div").append(newButton);

	}	

}

//When user inputs an animal into search box, a button is added for that animal
//function addAnimal () { 
	$("#addAnimal").on("click", function(event) {

	event.preventDefault();
	//Pulls text from input box on HTML page
	var animalSearch = $("#animal-input").val().trim();
	//Pushs the the text string into the topics array
	topics.push(animalSearch);
	//Calls the renderButtons function to create a button for this animal
	renderButtons();

	console.log(topics);
	});

//}

renderButtons();
//When user clicks on button, 10 static, non-animated gif images from GIPHY API will be shown on page
//function giphy() {
$("#animal-buttons-div").on("click", ".meow", function() {
	//Empty the 'zoo'
	$("#zoo").empty();

	var animal = $(this).attr("data-name");
	//Creates a variable called queryURL that assigns this link to be searched
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
	//Ajax query to retrieve GIFS
	$.ajax({
        url: queryURL,
        method: "GET"
      })
	  	.done(function(response) {
          	//Set results to the 
	        var results = response.data;

	        for (var i = 0; i < results.length; i++) {
	          var gifDiv = $("<div class='item'>");

	          var rating = results[i].rating;

	          console.log(results[i].images.fixed_height.url);

	          //Under every gif the rating of the gif will be displayed
	          var p = $("<p>").text("Rating: " + rating);
	          //Dynamically creates a placeholder for each GIF
	          var animalImage = $("<img>").attr("data-state", "still");
	          //Sets data animate link
	          animalImage.attr("data-animate", results[i].images.fixed_height.url);
	          //Sets data still link
	          animalImage.attr("data-still", results[i].images.fixed_height_still.url);
	          //Sets the source of the GIF dynamically
	          animalImage.attr("src", results[i].images.fixed_height_still.url);
	          //Prepends the <p> tag containg text + rating to gifDiv
	          gifDiv.prepend(p);
	          //Prepends the image/GIF to gifDiv
	          gifDiv.prepend(animalImage);
	          //Prepends the gifDiv to the div id="zoo"
	          $("#zoo").prepend(gifDiv);  
	        }
	        //When user clicks on GIPHY still, gif should animate. User clicks again, gif stops
	        //When an image is clicked on...
	    	$("img").on("click", function() {
	    		//Defining 'state' as the data-state
	    		var state = $(this).attr("data-state");
	    		//If statement, if data-state is still
	    		if (state === "still") {
	    			//Changes the source of this element to that of the attribute with data-animate
	    			$(this).attr("src", $(this).attr("data-animate"));
	    			//Changes the data-state to animate
	    			$(this).attr("data-state", "animate");
	    		}
	    		//Else statement, for when the data state has already been changed in this case
	    		else {
	    			//
	    			$(this).attr("src", $(this).attr("data-still"));

	    			$(this).attr("data-state", "still");
	    		}


	    	});

	    });
	});

})
//When user clicks on GIPHY still, gif should animate. User clicks again, gif stops

//Add form that takes user input , and adds to topics array.
/*$("#animal-input").on('click', function() {

		var qID = $('#searchTerm').val();

//function call that takes each topic in array, and remakes the buttons on the page */