// This example gets a class type and inserts it into the document.

// How to get a class type of ApiRGBColor.

// Retrieve class type of ApiRGBColor object and insert it to the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let rgbColor = Api.CreateRGBColor(255, 111, 61);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(rgbColor, 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(drawing);
let classType = rgbColor.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);