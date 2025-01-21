// This example checks if the current form is fixed size.
let document = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = document.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.ToFixed(2 * 240, 1 * 240);
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.ToFixed(2 * 240, 1 * 240);
let fixed = checkBoxForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The second form from this document has a fixed size: " + fixed);
document.Push(paragraph);