// This example shows how to set the date language in a date form.
let document = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = document.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetLanguage("en-CA");
let langId = dateForm.GetLanguage();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first date form from this document has setted language: " + langId);
document.Push(paragraph);