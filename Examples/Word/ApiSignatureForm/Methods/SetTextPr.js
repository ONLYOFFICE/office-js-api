// Set the text properties to the current form.

// Add text properties to the signature form.

// How to create a signature form and make its text bold and bigger.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
signatureForm.SetTextPr(textPr);