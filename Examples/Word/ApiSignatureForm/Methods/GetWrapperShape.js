// Access the container shape that controls the position and size of a signature field in a document.

// How do I reposition or resize the frame holding a signature field in a document?

// Anchor a signature field to a specific location on the page by adjusting its surrounding shape in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.ToFixed(10 * 240, 2 * 240);
let shape = signatureForm.GetWrapperShape();
shape.SetWrappingStyle("square");
shape.SetHorAlign("page", "center");
shape.SetVerAlign("margin", "top");