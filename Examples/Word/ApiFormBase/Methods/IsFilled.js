// This example checks whether the form is filled.

// How to check if the text form has any text set.

// Create two text forms, fill the second one with text, and check if each form is filled.

let doc = Api.GetDocument();
let textForm1 = Api.CreateTextForm({"key": "Name1", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": false, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm1);
let textForm2 = Api.CreateTextForm({"key": "Name2", "tip": "Enter your last name", "required": true, "placeholder": "Last name", "comb": false, "multiLine": false, "autoFit": false});
paragraph.AddElement(textForm2);
textForm2.SetText("Smith");
let filled1 = textForm1.IsFilled();
let filled2 = textForm2.IsFilled();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form is filled: " + filled1);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The second text form is filled: " + filled2);
doc.Push(paragraph);
