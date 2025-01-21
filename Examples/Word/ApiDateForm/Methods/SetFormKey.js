// This example sets a key to the current form.
let document = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = document.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetFormKey("Date form key");
let key = dateForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
document.Push(paragraph);