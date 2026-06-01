// Access the text formatting properties of a complex form in a document.

// How do I get the text properties of a form so I can change its style in a document?

// Apply bold or resize text by first obtaining the form's text properties object in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let textPr = complexForm.GetTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);