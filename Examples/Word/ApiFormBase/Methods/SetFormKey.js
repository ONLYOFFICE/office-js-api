// This example sets a key to the form.

// Change the key of the text form.

// How to specify the text form key.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetFormKey("Personal information");
let key = textForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);