// This example shows how to get all the selected drawings in the current document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.Select();
let drawings = document.GetSelectedDrawings();
drawings[0].SetSize(2 * 914400, 2 * 914400);