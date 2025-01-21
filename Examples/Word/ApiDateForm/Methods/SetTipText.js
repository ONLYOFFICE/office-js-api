// This example sets the tip text to the current form.
let document = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = document.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetTipText("Enter your date");
let tipText = dateForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tip text: " + tipText);
document.Push(paragraph);