// This example shows how to get a parent paragraph that contains the graphic object.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let parentParagraph = drawing.GetParentParagraph();
parentParagraph.AddLineBreak();
parentParagraph.AddText("This is a parent paragraph");