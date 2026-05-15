// Apply a border color to a form field to highlight it in a document.

// How do I change the border color of a form field in a document?

// Style the outline of a form field with a specific color to draw attention to it in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetBorderColor(Api.HexColor('#FF6F3D'));