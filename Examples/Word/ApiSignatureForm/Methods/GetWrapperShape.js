// This example shows how to get a shape in which the form is placed to control the position and size of the fixed size form frame.

// Get wrapper shape of the signature form.

// Change position of the wrapper shape from inline to anchored, centered horizontally on the page and aligned to the top of the margin.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.ToFixed(10 * 240, 2 * 240);
let shape = signatureForm.GetWrapperShape();
shape.SetWrappingStyle("square");
shape.SetHorAlign("page", "center");
shape.SetVerAlign("margin", "top");
