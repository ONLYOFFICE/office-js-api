// Check if the current form is fixed size.

// How to know whether the first signature form from this document is fixed.

// Get the boolean that represents the fixed property of the signature form.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.ToFixed(10 * 240, 2 * 240);
let fixed = signatureForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is fixed: " + fixed);
doc.Push(paragraph);