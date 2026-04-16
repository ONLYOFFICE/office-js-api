// Get the placeholder text of the current form in a document.

// How to get the placeholder text of a signature form.

// Retrieve the placeholder text of a created signature form and display it.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetPlaceholderText("Signature");
let placeholderText = signatureForm.GetPlaceholderText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + placeholderText);
doc.Push(paragraph);