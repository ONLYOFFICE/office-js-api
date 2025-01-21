// This example checks if the current form is fixed size.
let document = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = document.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.ToFixed(10 * 240, 2 * 240);
let fixed = dateForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is fixed: " + fixed);
document.Push(paragraph);