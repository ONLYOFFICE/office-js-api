// Retrieve the text formatting properties of a date form in a document.

// How do I get the text properties applied to a date form in a document?

// Modify the retrieved properties to further adjust the form's appearance, such as adding italic style.

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