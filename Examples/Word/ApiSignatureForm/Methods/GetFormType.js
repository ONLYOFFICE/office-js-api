// Get a type of the form in a document.

// How to get a type of a signature form.

// Retrieve type of a created signature form object and display it.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let formType = signatureForm.GetFormType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form type: " + formType);
doc.Push(paragraph);