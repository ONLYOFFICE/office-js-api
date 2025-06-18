// This example returns the text properties from the current form.

// How to get a text properties of a date form.

// How to increase a font size of the date form and make its text bold.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
dateForm.SetTextPr(textPr);
let formTextPr = dateForm.GetTextPr();
formTextPr.SetItalic(true);
dateForm.SetTextPr(formTextPr);