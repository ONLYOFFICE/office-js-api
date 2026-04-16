// Get the tip text of the current form in a document.

// Get a signature form tip text and show it in the document.

// Show a tip text of the form.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let tipText = signatureForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tip text: " + tipText);
doc.Push(paragraph);