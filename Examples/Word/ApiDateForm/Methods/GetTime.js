// This example shows how to get the date timestamp from a date form.

// How to get a time enetered to the date form.

// Display the time from the date and time answer.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetTime(new Date().getTime());
let timeStamp = dateForm.GetTime();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first date form from this document has setted time: " + new Date(timeStamp));
doc.Push(paragraph);