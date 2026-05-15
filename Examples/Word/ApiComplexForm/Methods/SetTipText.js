// Set a tooltip message on a complex form in a document.

// How do I add a helpful tip that appears when a user hovers over a form in a document?

// Provide context or instructions to users through a tooltip shown on a form field.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetTipText("Insert here other forms");
let tipText = complexForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tip text: " + tipText);
doc.Push(paragraph);