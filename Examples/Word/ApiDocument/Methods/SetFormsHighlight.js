// This example sets the highlight to the forms in the document.
let document = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = document.GetElement(0);
paragraph.AddElement(textForm);
document.SetFormsHighlight(255, 111, 61);