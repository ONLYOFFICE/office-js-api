// Attempt to switch a signature field to inline layout in a document.

// How do I check whether a signature field can be converted to an inline element in a document?

// Confirm that a signature field stays fixed even after trying to make it inline in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
doc.Push(paragraph);
signatureForm.ToInline();
let fixed = signatureForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The signature form is still fixed after calling ToInline: " + fixed);
doc.Push(paragraph);