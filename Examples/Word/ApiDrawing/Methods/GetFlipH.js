// Check whether the drawing is flipped horizontally in a document.

// How to get the horizontal flip property of the shape in a document.

// Create a drawing, add text to it, and read its horizontal flip value in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let flip = drawing.GetFlipH();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing is flipped horizontally: " + flip);
doc.AddElement(0, paragraph);