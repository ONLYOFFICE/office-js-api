// This example calls the ToInline method on a signature form. Note that the signature form is always fixed and cannot be inline, so this method has no effect.

// How to use the ToInline method on a signature form.

// Call ToInline on the signature form. Since the signature form is always fixed, it remains fixed after this call.

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
