// Set the width of each character cell in a comb-style text field in a document.

// How do I control the width of individual character boxes in a text field in a document?

// Adjust character cell width to ensure uniform spacing across a comb text field in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "maxCharacters": 10, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetComb(true);
textForm.SetCellWidth(7);