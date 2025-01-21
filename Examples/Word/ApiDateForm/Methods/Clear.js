// This example clears the form.
let document = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
dateForm.SetTime(new Date().getTime());
let paragraph = document.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.Clear();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document was cleared.");
document.Push(paragraph);