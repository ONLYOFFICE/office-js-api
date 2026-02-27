// This example shows how to get the border color of the current form.

// How to get the border color of a complex form.

// Retrieve the border color of a created complex form and display it.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetBorderColor(Api.RGB(255, 111, 61));
let borderColor = complexForm.GetBorderColor();
paragraph = Api.CreateParagraph();
paragraph.AddText("Border color (RGB): (" + borderColor.r + ", " + borderColor.g + ", " + borderColor.b + ")");
doc.Push(paragraph);
