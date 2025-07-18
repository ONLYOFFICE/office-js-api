// This example sets the cell width to the applied comb of characters.

// How to set the width of the cell of the text form.

// Resize the text form cell.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "maxCharacters": 10, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetComb(true);
textForm.SetCellWidth(7);