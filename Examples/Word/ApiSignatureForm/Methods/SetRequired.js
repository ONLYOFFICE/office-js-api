// Set the required property for the signature form. Note that the signature form is always required.

// How to set the required property for the signature form.

// Set the required property for the signature form. The signature form is always required regardless of this setting.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetRequired(false);
let required = signatureForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);