// Apply a border color to a text field in a document.

// How do I change the color of the border around a text field in a document?

// Highlight a text field's boundary by assigning it a specific border color in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetBorderColor(Api.HexColor('#FF6F3D'));