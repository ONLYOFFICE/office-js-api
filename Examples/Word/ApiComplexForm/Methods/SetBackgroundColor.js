// Set the background color of a complex form in a document.

// How do I change the background color of a form in a document?

// Apply a custom fill color to a form to match a document's visual style.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetBackgroundColor(Api.HexColor('#FF6F3D'));