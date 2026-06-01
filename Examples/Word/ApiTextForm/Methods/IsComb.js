// Check whether a text field splits its input into evenly spaced cells in a document.

// How do I determine if a text field uses a comb layout for its characters in a document?

// Verify that equal-width character cells are active on a text field in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "maxCharacters": 10, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetComb(true);
let comb = textForm.IsComb();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is comb: " + comb);
doc.Push(paragraph);