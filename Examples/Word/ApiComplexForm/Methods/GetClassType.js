// Retrieve the class type of a complex form in a document.

// How do I get the class type of a complex form in a document?

// Identify what kind of object a complex form is by reading its type label at runtime.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm();
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let classType = complexForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);