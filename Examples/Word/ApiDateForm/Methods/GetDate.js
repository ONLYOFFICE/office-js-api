// Retrieve the date value stored in a date form field in a document.

// How do I read the current date from a date form in a document?

// Display the date a user entered into a date form by fetching its stored value in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetDate(new Date());
let formDate = dateForm.GetDate();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first date form from this document has setted time: " + formDate.toString());
doc.Push(paragraph);