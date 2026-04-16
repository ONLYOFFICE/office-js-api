// Get a parent paragraph that contains the graphic object in a document.

// Get an element's parent paragraph in a document.

// How to show the shape's wrapper paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let parentParagraph = drawing.GetParentParagraph();
parentParagraph.AddLineBreak();
parentParagraph.AddText("This is a parent paragraph");