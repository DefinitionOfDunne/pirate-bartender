'use strict'

var strength = new Question("Do ye like yer drinks strong?"),
    saltiness = new Question("Do ye like it with a salty tang?"),
    bitterness = new Question("Are ye a lubber who likes it bitter?"),
    sweetness = new Question("Would ye like a bit of sweetness?"),
    fruity = new Question("Are ye one for a fruity finish?");

var strongItems = new Ingredient(["whiskey", "rum", "vodka"], "strong"),
    saltyItems = new Ingredient(["bacon crumbles", "sea salt", "cocktail olives"], "salty"),
    bitterItems = new Ingredient(["lemon twist", "squeeza lime", "splasha tonic"], "bitter"),
    sugaryItems = new Ingredient(["sugar cube", "splasha cola", "honey"], "sweet"),
    fruityItems = new Ingredient(["splasha apple juice", "splasha orange juice", "cherry"], "fruity");

var preferences = {};

var dylan = new Bartender();

initUI();
initMenu();
function Bartender() {
    this.drink = [];
}

Bartender.prototype.createDrink = function(preferences) {

    var selections = [strongItems.items, saltyItems.items, bitterItems.items, sugaryItems.items, fruityItems.items];
    var preferencesList = ['strong', 'salty', 'bitter', 'sugary', 'fruity'];

    for (var i = 0; i < selections.length; i++) {
        if (preferences[preferencesList[i]]) {
            this.drink.push('<li class="drinkList">' + selections[i][Math.floor(Math.random() * 3)] + '</li>');
        }
    }

    $('.userCreation').prepend(this.drink.join(' '));
    this.drink = [];
};


function initUI() {
    var questions = [strength.text, saltiness.text, bitterness.text, sweetness.text, fruity.text];

    for (var i = 0; i < questions.length; i++) {
        $('.drink-order').append('<li class="prefs">' + questions[i] + '<input type="checkbox" id="box' + (i + 1) + '"></li>');

    }
}
function initMenu() {
    $('.customCreation').hide();
    var items = [strongItems.items, saltyItems.items, bitterItems.items, sugaryItems.items, fruityItems.items];
    var type = ['strong', 'salty', 'bitter', 'sugary', 'fruity'];

    for (var i = 0; i < items.length; i++) {
        $('.customCreation').append('<li>' + type[i] + " options: <span>" + items[i].join(', ') + '</span> </li>');
    }
}
function Question(text) {
    this.text = text;
}

function Ingredient(items, category) {
    this.items = items;
    this.category = category;
}


$('#create-drink').click(function() {
    $('.drinkList').remove();
    var boxes = ['#box1', '#box2', '#box3', '#box4', '#box5'],
        preferencesList = ['strong', 'salty', 'bitter', 'sugary', 'fruity'];

    for (var i = 0; i < boxes.length; i++) {

        if ($(boxes[i]).prop('checked')) {
            preferences[preferencesList[i]] = true;
        }
    }

    dylan.createDrink(preferences);
        for (var i = 0; i < boxes.length; i++) {
            ($(boxes[i]).prop('checked', false))
            preferences[preferencesList[i]] = false;
        }
      
});

$('#ingredients-revealer').click(function() {
    $('.customCreation').toggle();
})
