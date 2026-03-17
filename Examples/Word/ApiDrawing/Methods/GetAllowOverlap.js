// This example returns whether the drawing is allowed to overlap other drawing objects.

// How to get the allow overlap state of a shape in a text document.

// Create a shape, enable overlap and display the result.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
drawing.SetWrappingStyle("square");
paragraph.AddDrawing(drawing);
drawing.SetAllowOverlap(true);
let docContent = drawing.GetContent();
let allowOverlap = drawing.GetAllowOverlap();
let innerParagraph = Api.CreateParagraph();
innerParagraph.AddText("Allow overlap: " + allowOverlap);
docContent.AddElement(0, innerParagraph);
