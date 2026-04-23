// Read the border color of a complex form in a document.

// How do I retrieve the border color of a complex form in a document?

// Inspect the RGB values of a form's border to verify or display its current styling.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetBorderColor(Api.RGB(255, 111, 61));
let borderColor = complexForm.GetBorderColor();
paragraph = Api.CreateParagraph();
paragraph.AddText("Border color (RGB): (" + borderColor.r + ", " + borderColor.g + ", " + borderColor.b + ")");
doc.Push(paragraph);