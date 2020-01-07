var allPeople = JSON.parse(localStorage.getItem("people")) || people;
var peopleTable = document.querySelector("#logNames");

// refresh Highscores
function renderHighscores() {
  peopleTable.innerHTML = ''; // emptying out the previous table contents
  for (var i = 0; i < allPeople.length; i++) {
    console.log("Get here - Hscore.js - line 8");

  peopleTD = document.createElement("p");
  peopleTD.innerHTML = allPeople[i].name + " - " + allPeople[i].score;

  peopleTable.prepend(peopleTD);
    console.log("Get here - Hscore.js - line 16")
};
renderHighscores();  

//CLEAR SCORES BUTTON
var clearScores = document.getElementById("clearScores");
clearScores.addEventListener("click", function(){
  peopleTable.innerHTML = ''; 
  newPerson = "";
  allPeople = [];
  people = [];  
  localStorage.removeItem('people');
  allPeople = JSON.parse(localStorage.getItem("people")) || people;
  console.log("Storage Cleared");
});