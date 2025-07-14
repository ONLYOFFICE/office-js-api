// This example creates a text form with the specific text form properties.

// How to create a text form with adding base properties like max characters limit, cell width, etc. to it.

// Create a text form with base properties.

let textFormPrBase = {
	"comb": true,
	"maxCharacters": 10,
	"cellWidth": 3,
	"multiLine": false,
	"autoFit": false
};
let textForm = Api.CreateTextForm(textFormPrBase);
