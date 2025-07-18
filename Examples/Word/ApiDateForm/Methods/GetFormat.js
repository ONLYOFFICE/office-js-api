// This example shows how to get the date format from a date form.

// How to get a date form format.

// Retrieve the format of the date and display it.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetFormat("dddd, dd MMMM yyyy");
let format = dateForm.GetFormat();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first date form from this document has format: " + format);
doc.Push(paragraph);