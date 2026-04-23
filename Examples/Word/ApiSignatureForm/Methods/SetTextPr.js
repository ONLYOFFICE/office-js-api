// Apply text formatting to a signature field in a document.

// How do I change the font size and style of text inside a signature field in a document?

// Make the text in a signature field bold and larger to improve its visual prominence in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
signatureForm.SetTextPr(textPr);