// This example checks whether the drawing is flipped vertically.

// How to get the vertical flip property of the shape.

// Create a drawing, add text to it, and read its vertical flip value.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetVertFlip(true);
let flip = drawing.GetFlipV();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing is flipped vertically: " + flip);
docContent.AddElement(0, paragraph);
