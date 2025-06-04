// This example sets the outline properties to the specified graphic object.

// How to outline the drawing with the stroke.

// Set the borders of the shape.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing); 
let copyDrawing = drawing.Copy();
stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
copyDrawing.SetOutLine(stroke);
paragraph.AddDrawing(copyDrawing);