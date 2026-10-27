// Assign a unique ID to a signature form in a document.

// Set a custom ID for a signature form to tell it apart from other forms in a document.

// Give a signature form an ID that is saved to the file, unlike the internal ID which can change after reopening.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetId(1001);
let formId = signatureForm.GetId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form ID: " + formId);
doc.Push(paragraph);