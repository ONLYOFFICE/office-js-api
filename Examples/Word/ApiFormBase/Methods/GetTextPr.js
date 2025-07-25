// This example shows how to get the text properties from the form.

// How to get a text properties of a text form.

// How to make italic the text of the form.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textForm.SetTextPr(textPr);
let formTextPr = textForm.GetTextPr();
formTextPr.SetItalic(true);
textForm.SetTextPr(formTextPr);