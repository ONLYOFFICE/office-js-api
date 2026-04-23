// Read the border color of a checkbox form field in a document.

// How do I find out what color is applied to the border of a checkbox in a document?

// Inspect the border color after styling a checkbox form to confirm the value was applied correctly in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.SetBorderColor(Api.RGB(255, 111, 61));
let borderColor = checkBoxForm.GetBorderColor();
paragraph = Api.CreateParagraph();
paragraph.AddText("Border color (RGB): (" + borderColor.r + ", " + borderColor.g + ", " + borderColor.b + ")");
doc.Push(paragraph);