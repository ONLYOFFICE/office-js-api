// This example checks if the current form is required.
let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms", "required": true, "placeholder": "Complex form"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let required = complexForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);