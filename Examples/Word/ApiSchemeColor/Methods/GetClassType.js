// Retrieve the class type of a scheme color in a document.

// How to identify the class type of a scheme color in a document?

// Obtain the class type identifier of a scheme color object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let schemeColor = Api.CreateSchemeColor("dk1");
let fill = Api.CreateSolidFill(schemeColor);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("curvedUpArrow", 5930900, 595605, fill, stroke);
paragraph.AddDrawing(drawing);
let classType = schemeColor.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);