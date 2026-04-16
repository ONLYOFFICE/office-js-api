// Calls the ToFixed method on a signature form. Note that the signature form is always fixed and cannot be inline, so this method does not change the form size.

// How to use the ToFixed method on a signature form.

// Call ToFixed on the signature form. Since the signature form is always fixed, its size remains unchanged.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.ToFixed(10 * 240, 2 * 240);
let fixed = signatureForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + fixed);
doc.Push(paragraph);