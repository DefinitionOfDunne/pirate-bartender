'use strict'

//QUESTION OBJECTS
var strength = new Question("Do ye like yer drinks strong?"),
    saltiness = new Question("Do ye like it with a salty tang?"),
    bitterness = new Question("Are ye a lubber who likes it bitter?"),
    sweetness = new Question("Would ye like a bit of sweetness with yer poison?"),
    fruity = new Question("Are ye one for a fruity finish?");

//INGREDIENT OBJECTS
var strongItems = new Ingredient(["whiskey", " rum", " vodka"], "strong"),
    saltyItems = new Ingredient(["bacon crumbles", " sea salt", " cocktail olives"], "salty"),
    bitterItems = new Ingredient(["lemon twist", " squeeza lime", " splasha tonic"], "bitter"),
    sugaryItems = new Ingredient(["sugar cube", " splasha cola", " honey"], "sweet"),
    fruityItems = new Ingredient(["splasha apple juice", " splasha orange juice", " cherry"], "fruity");





appendQuestions('<li class="prefs">' + strength.text + '<input type="checkbox" id="box1">' + '</li>');
    appendQuestions('<li class="prefs">' + saltiness.text + '<input type="checkbox" id="box2">' + '</li>');
appendQuestions('<li class="prefs">' + bitterness.text + '<input type="checkbox" id="box3">' + '</li>');
appendQuestions('<li class="prefs">' + sweetness.text + '<input type="checkbox" id="box4">' + '</li>');
appendQuestions('<li class="prefs">' + fruity.text + '<input type="checkbox" id="box5">' + '</li>');


//PREFERENCES OBJECTS
var firstPref = new Preferences(box1, strongItems.randomize()),
    secondPref = new Preferences(box2, saltyItems.randomize()),
    thirdPref = new Preferences(box3, bitterItems.randomize()),
    fourthPref = new Preferences(box4, sugaryItems.randomize()),
    fifthPref = new Preferences(box5, fruityItems.randomize());



Preferences.prototype.getChoices();

$('#ingredients-revealer').on('click', function() {
    strongItems.showMenu();
    saltyItems.showMenu();
    bitterItems.showMenu();
    sugaryItems.showMenu();
    fruityItems.showMenu();
})

function appendQuestions(item) {
    $(".drink-order").append(item);
}

function appendLeft(item) {
    $(".userCreation").append('<br>' + item);
}

function appendRight(item) {
    $(".customCreation").append('<br>' + item);
}
