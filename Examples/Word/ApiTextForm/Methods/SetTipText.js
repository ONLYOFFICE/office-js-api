// This example sets the tip text to the current form.
let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetTipText("Enter your first name");
let tipText = textForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tip text: " + tipText);
doc.Push(paragraph);