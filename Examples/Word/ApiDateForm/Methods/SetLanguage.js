// Set the language used by a date form in a document.

// How do I change the locale of a date form in a document?

// Update a date form to use a different language and confirm the new locale is applied in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetLanguage("en-CA");
let langId = dateForm.GetLanguage();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first date form from this document has setted language: " + langId);
doc.Push(paragraph);