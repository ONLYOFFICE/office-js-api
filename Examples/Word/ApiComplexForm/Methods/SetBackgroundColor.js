// Set the background color to the current form.

// How to set background color for a complex form?

// Set background color and display the result in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetBackgroundColor(Api.HexColor('#FF6F3D'));