// This example checks if the current form is fixed size.
let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let isFixed = complexForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("Complex form is fixed: " + isFixed);
doc.Push(paragraph);