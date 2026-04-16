// Set the border color to the current form.

// How to set border color for a complex form?

// Set border color and display the result in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetBorderColor(Api.HexColor('#FF6F3D'));