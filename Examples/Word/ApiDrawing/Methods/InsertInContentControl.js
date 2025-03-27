// This example wraps the graphic object with a rich text content control.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This graphic object was wrapped in content control");
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.InsertInContentControl(1);