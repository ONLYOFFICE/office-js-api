// This example gets a class type and inserts it into the document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let rgbColor = Api.CreateRGBColor(255, 111, 61);
let fill = Api.CreateSolidFill(rgbColor);
let stroke = Api.CreateStroke(5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
let drawing = Api.CreateShape("roundRect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(drawing);
let classType = stroke.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
document.Push(paragraph);