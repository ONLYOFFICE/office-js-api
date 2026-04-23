// Identify the type of a selected region of text in a document.

// How do I check what kind of object a text selection is in a document?

// Confirm the category of a highlighted portion before applying further changes in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange(0, 9);
let classType = range.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);