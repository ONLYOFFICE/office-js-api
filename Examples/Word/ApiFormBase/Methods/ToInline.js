// This example converts the form to an inline form.
let document = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = document.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(10 * 240, 2 * 240);
let copyForm = textForm.Copy();
paragraph = Api.CreateParagraph();
paragraph.AddElement(copyForm);
document.Push(paragraph);
copyForm.ToInline();
let fixed = textForm.IsFixed();
let fixedCopy = copyForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + fixed);
paragraph.AddLineBreak();
paragraph.AddText("The second form from this document has a fixed size: " + fixedCopy);
document.Push(paragraph);