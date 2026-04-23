// Set a tooltip hint on a signature field in a document.

// How do I add a helpful hint that appears when a user hovers over a signature field in a document?

// Provide guidance to signers by attaching a short tooltip message to a signature field in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetTipText("Please sign here");
let tipText = signatureForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tip text: " + tipText);
doc.Push(paragraph);