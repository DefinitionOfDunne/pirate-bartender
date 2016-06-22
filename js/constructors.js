'use strict'

//QUESTIONS
function Question(text) {
    this.text = text;
}



//INGREDIENTS
function Ingredient(category, description) {
    this.category = category;
    this.description = description;
    this.showMenu = function() {
        appendRight("<span class='custom'>" + this.description + " options</span>: " + '<span class="custom2">' + this.category + '</span>');
    }
}

Ingredient.prototype.randomize = function() {
    return this.category[Math.floor(Math.random() * 3)];
}




//PREFERENCES
function Preferences(selector, result) {
    this.selector = selector;
    this.result = result;
}

Preferences.prototype.getChoices = function() {
    var drink = [];
    $('#create-drink').click(function() {
        if ($('#box1').prop('checked')) {
            drink.push(firstPref.result + '<br>');
        }
        if ($('#box2').prop('checked')) {
            drink.push(secondPref.result + '<br>');
        }
        if ($('#box3').prop('checked')) {
            drink.push(thirdPref.result + '<br>');
        }
        if ($('#box4').prop('checked')) {
            drink.push(fourthPref.result + '<br>');
        }
        if ($('#box5').prop('checked')) {
            drink.push(fifthPref.result + '<br>');
        }
        appendLeft(drink.join(' '));
    })

}
