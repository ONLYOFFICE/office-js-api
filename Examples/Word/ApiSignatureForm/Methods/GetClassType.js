// Check the class type returned by a signature form.

// How do I check what type a signature form object is?

// Retrieve and output the class type string for a signature form.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let classType = signatureForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);