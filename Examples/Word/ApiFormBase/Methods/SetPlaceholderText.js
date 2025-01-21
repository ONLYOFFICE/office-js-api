// This example sets the placeholder text to the form.
let document = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = document.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetPlaceholderText("First name");