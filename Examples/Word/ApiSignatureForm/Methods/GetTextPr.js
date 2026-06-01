// Read the text formatting settings of a signature form in a document.

// How do I retrieve the text styling applied to a signature form in a document?

// Copy the text appearance from one signature form to reuse it in a document.

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