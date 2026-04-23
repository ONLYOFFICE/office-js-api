// Read the maximum number of characters allowed in a text field in a document.

// How do I check how many characters a text entry area is limited to in a document?

// Verify the character cap set on a text field to ensure input constraints are correct in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetCharactersLimit(5);
textForm.SetText("John Smith");
let limit = textForm.GetCharactersLimit();
paragraph = Api.CreateParagraph();
paragraph.AddText("Characters limit: " + limit);
doc.Push(paragraph);