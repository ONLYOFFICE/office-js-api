// Create a date entry field where users input calendar dates in a document.

// How do I add a date picker field to a document?

// Set up a form field that accepts date values with specific formatting in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({
	"key": "Nowadays",
	"tip": "Enter current date",
	"required": true,
	"placeholder": "Your date here",
	"format": "mm.dd.yyyy",
	"lang": "en-US"
});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);