// Read the tooltip text configured for a complex form in a document.

// How do I retrieve the tooltip that guides users filling in a form in a document?

// Confirm the correct instructional hint is set on a form before sharing the document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let tipText = complexForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tip text: " + tipText);
doc.Push(paragraph);