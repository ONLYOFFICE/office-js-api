// Assign a specific date to a date form in a document.

// How do I populate a date form with a chosen date in a document?

// Pre-fill a date form with today's date and read back the stored value in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetDate(new Date());
let formDate = dateForm.GetDate();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first date form from this document has setted time: " + formDate.toString());
doc.Push(paragraph);