// Attach a custom tag to a text form in a document.

// How do I label a text form with a tag so it can be identified later in a document?

// Organize and reference a text form by giving it a searchable tag in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
textForm.SetTag("Info");
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let tag = textForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);