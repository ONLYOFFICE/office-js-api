// Enable automatic resizing of a text field to fit its content in a document.

// How do I make a text field automatically adjust its size to match the entered text in a document?

// Keep a text field tidy by letting it expand or shrink to fit its content in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "multiLine": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(6 * 240, 2 * 240);
textForm.SetAutoFit(true);
let autoFit = textForm.IsAutoFit();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is autofit: " + autoFit);
doc.Push(paragraph);