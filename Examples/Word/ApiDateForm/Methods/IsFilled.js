// This example checks whether the date form is filled.

// How to check if the date form has a date set.

// Create two date forms, fill the second one with the current date, and check if each form is filled.

let doc = Api.GetDocument();
let dateForm1 = Api.CreateDateForm({"key": "Date1", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm1);
let dateForm2 = Api.CreateDateForm({"key": "Date2", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
paragraph.AddElement(dateForm2);
dateForm2.SetTime(new Date().getTime());
let filled1 = dateForm1.IsFilled();
let filled2 = dateForm2.IsFilled();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first date form is filled: " + filled1);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("The second date form is filled: " + filled2);
doc.Push(paragraph);
