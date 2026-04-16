// Check whether the text form is filled.

// How to check if the text form has any text set.

// Create two text forms, fill the second one with text, and check if each form is filled.

let doc = Api.GetDocument();
let textForm1 = Api.CreateTextForm({"key": "First name", "tip": "Enter your first name", "required": true, "placeholder": "First name", "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm1);
paragraph.AddLineBreak();
let textForm2 = Api.CreateTextForm({"key": "Last name", "tip": "Enter your last name", "required": true, "placeholder": "Last name", "multiLine": false, "autoFit": false});
paragraph.AddElement(textForm2);
textForm2.SetText("Smith");
let filled1 = textForm1.IsFilled();
let filled2 = textForm2.IsFilled();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first name is filled: " + filled1);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The last name is filled: " + filled2);
doc.Push(paragraph);