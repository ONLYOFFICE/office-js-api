// Extract the combined text content of a complex form in a document.

// How do I read the text entered across all parts of a form in a document?

// Capture the assembled text from a multi-part form to display or validate it in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
complexForm.Add(Api.CreateTextForm({"placeholder" : "username"}));
complexForm.Add("@onlyoffice.com");
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let text = complexForm.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form text: " + text);
doc.Push(paragraph);