// Create a text form with the specific text form properties.

// How do I create a text form with base properties such as the character limit and cell width?

// Create a text form with base properties.

let textFormPrBase = {
	"comb": true,
	"maxCharacters": 10,
	"cellWidth": 3,
	"multiLine": false,
	"autoFit": false
};
let textForm = Api.CreateTextForm(textFormPrBase);
