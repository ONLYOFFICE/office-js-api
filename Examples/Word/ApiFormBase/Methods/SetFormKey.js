// This example sets a key to the form.
let document = Api.GetDocument();
let textForm = Api.CreateTextForm({"tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = document.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetFormKey("Personal information");
let key = textForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
document.Push(paragraph);