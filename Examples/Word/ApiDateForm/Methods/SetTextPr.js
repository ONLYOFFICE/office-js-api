// Apply text formatting to a date form in a document.

// How do I apply bold and larger font to a date form in a document?

// Customize the appearance of a date form by changing its font size and weight in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
dateForm.SetTextPr(textPr);