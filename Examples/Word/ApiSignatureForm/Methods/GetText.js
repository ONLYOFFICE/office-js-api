// Get the text from the form in a document.

// How to get the raw text from the signature form.

// Display the text content of the signature form.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let text = signatureForm.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form text: " + text);
doc.Push(paragraph);