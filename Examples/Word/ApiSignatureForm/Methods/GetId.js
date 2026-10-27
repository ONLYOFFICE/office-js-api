// Read the ID assigned to a signature form in a document.

// Check the ID that was set for a signature form with the SetId method in a document.

// Display the signature form ID that is saved to the file and stays the same after the document is reopened.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetId(1001);
let formId = signatureForm.GetId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form ID: " + formId);
doc.Push(paragraph);