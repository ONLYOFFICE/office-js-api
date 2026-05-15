// Apply text formatting properties to a complex form in a document.

// How do I set the font style and size of text inside a form in a document?

// Control the visual appearance of form text by specifying bold, size, and other character styles.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
complexForm.SetTextPr(textPr);