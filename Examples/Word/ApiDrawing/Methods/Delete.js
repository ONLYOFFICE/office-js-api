// This example deletes the current graphic object.

// How to delete a shape from the document.

// Remove the drawing object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.Delete();
paragraph.AddLineBreak();
paragraph.AddText("In this paragraph, the Drawing object has been deleted.");