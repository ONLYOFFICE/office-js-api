// Set the tip text to the current form.

// Add text as a tip to the signature form.

// How to create a signature form and specify its tip text.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetTipText("Please sign here");
let tipText = signatureForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tip text: " + tipText);
doc.Push(paragraph);