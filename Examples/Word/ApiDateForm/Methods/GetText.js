// This example shows how to get the text from the form.
let document = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = document.GetElement(0);
paragraph.AddElement(dateForm);
let text = dateForm.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form text: " + text);
document.Push(paragraph);