// Return the text properties from the current form.

// How to get the properties of the text of the form.

// Get the text properties of one form and apply it to another.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
signatureForm.SetTextPr(textPr);
let formTextPr = signatureForm.GetTextPr();
formTextPr.SetItalic(true);
signatureForm.SetTextPr(formTextPr);