// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"24K Magic",
	"artist":"Bruno Mars",
	"mp3url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
	"imageurl":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
};

var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"imageurl":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"imageurl":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"imageurl":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

];



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  
$().append();
displayList();
clearList();
});

function displayList(){
$('body').append("<p>title: " + mySong.title + "</p>");
$('body').append("<p>artist: " + mySong.artist + "</p>");
$('body').append("<p> address: "+"<a href="+ mySong.mp3url +">"+ mySong.mp3url+ "</a>"+"</p>");
$('body').append("<img class="+"img"+" src="+mySong.imageurl+">");

for(var i=0;i < myPlayList.length ; i++
		){
		
		$('body').append("<p>title: "+myPlayList[i].title);
		$('body').append("<p>artist: "+myPlayList[i].artist);
		$('body').append("<p>address: "+"<a href="+myPlayList[i].mp3url+">"+myPlayList[i].mp3url+"<a>");
		$('body').append("<img class="+"'img'"+ "src="+myPlayList[i].imageurl+">");
	}  
}

function clearList(){
  
	  
  
}

function addSong(){
 
  var title1=$("#one").val();
	var artist1=$("#two").val();
	var addres1=$("#three").val();
	var urlimg1=$("#four").val();
	
	var song= {
		"title" : title1,
		"artist" : artist1,
		"mp3url":addres1,
		"urlimg":urlimg1,
	};
	console.log(song);
  myPlayList.push(song);
}

