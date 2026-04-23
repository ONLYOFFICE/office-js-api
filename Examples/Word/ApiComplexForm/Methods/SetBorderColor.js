// Set the border color of a complex form in a document.

// How do I change the border color of a form in a document?

// Apply a custom border color to a form to highlight it within the document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetBorderColor(Api.HexColor('#FF6F3D'));