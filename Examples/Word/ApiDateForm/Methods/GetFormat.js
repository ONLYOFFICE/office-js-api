// This example shows how to get the date format from a date form.
let document = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = document.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetFormat("dddd, dd MMMM yyyy");
let format = dateForm.GetFormat();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first date form from this document has format: " + format);
document.Push(paragraph);