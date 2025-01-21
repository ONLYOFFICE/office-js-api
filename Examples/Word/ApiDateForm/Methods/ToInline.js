// This example converts the current form to an inline form.
let document = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = document.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.ToFixed(10 * 240, 2 * 240);
let copyForm = dateForm.Copy();
paragraph = Api.CreateParagraph();
paragraph.AddElement(copyForm);
document.Push(paragraph);
copyForm.ToInline();
let fixed = dateForm.IsFixed();
let fixedCopy = copyForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + fixed);
paragraph.AddLineBreak();
paragraph.AddText("The second form from this document has a fixed size: " + fixedCopy);
document.Push(paragraph);