// Confirm whether a signature field has a locked, unchangeable size in a document.

// How do I find out if a signature field is set to a fixed size in a document?

// Distinguish between resizable and size-locked signature fields in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.ToFixed(10 * 240, 2 * 240);
let fixed = signatureForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is fixed: " + fixed);
doc.Push(paragraph);