// Replace selected text with an editable form field in a document.

// How do I convert text into a fillable field in a document?

// Turn highlighted content into an interactive text input area in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("First name");
paragraph.Select();
doc.InsertTextForm({
	"key": "Personal information",
	"tip": "Enter your first name",
	"required": true,
	"placeholder": "Name",
	"comb": true,
	"maxCharacters": 10,
	"cellWidth": 3,
	"multiLine": false,
	"autoFit": false,
	"placeholderFromSelection": true,
	"keepSelectedTextInForm": false
});