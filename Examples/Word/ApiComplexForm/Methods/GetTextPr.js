// Return the text properties from the current form.

// How do I get the text pr in a document?

// Get the text pr using a complex form object.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let textPr = complexForm.GetTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);