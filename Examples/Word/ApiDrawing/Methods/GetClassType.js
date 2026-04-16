// Retrieve the class type of a drawing object in a document.

// How to identify the class type of a drawing object in a document?

// Obtain the class type identifier of a drawing object object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let classType = drawing.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);