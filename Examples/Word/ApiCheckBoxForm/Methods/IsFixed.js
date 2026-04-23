// Verify whether a checkbox form has a fixed size in a document.

// How do I check if a checkbox form is fixed-size in a document?

// Confirm that a form converted to fixed dimensions reports its fixed state correctly in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
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
doc.Push(paragraph);