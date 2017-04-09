'use strict';

var _ = require('lodash');

var recipes = {
    italian: [
        "1 cup olive oil",
        "1 clove garlic minced",
        "1 teaspoon dried oregano",
        "one quarter cup balsamic vinegar",
        "1 tablespoon brown sugar",
        "whisk until blended"

    ],
    ranch: [
        "1 clove garlic minced",
        "2 chives, finely chopped",
        "one half cup buttermilk",
        "one half cup nonfat greek yogurt",
        "1 tablespoon lemon juice",
        "one thrid cup parsley, finely chopped",
        "add salt to taste",
        "whisk until blended, chilll until ready to use"
    ],
    vinaigrette: [
        "1 tablespoon balsamic vinegar",
        "one half teaspoon dijon mustard",
        "one quarter teaspoon sea salt",
        "one eighth teaspoon ground black pepper",
        "3 tablespoons extra-virgin olive oil",
        "whisk until blended"
    ]
};

function DressingDataHelper() { };

DressingDataHelper.prototype.getPrompt = function() {

    var prompt = "What type of pantry dressing would you like to make?";
    var dressings = this._getTypes();
    return prompt + " " + dressings;
};

DressingDataHelper.prototype._getTypes = function() {
    var dressings = _.keys(recipes).sort().join(", ");
    dressings.match(/,([^,]+)$/);
    dressings = dressings.replace(/,([^,]+)$/, ", or" + RegExp.$1);
    return dressings;
}

DressingDataHelper.prototype.getRecipe = function( dressingType ) {

    dressingType = dressingType.toLowerCase();
    if( recipes[ dressingType ] !== undefined) {
        return recipes[ dressingType ].join(". ");
    }
    return undefined;
};

module.exports = DressingDataHelper;