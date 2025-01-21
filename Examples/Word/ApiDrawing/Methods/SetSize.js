// This example sets the size of the shape bounding box.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is a paragraph with a shape. ");
paragraph.AddText("The text wraps the rectangular box that bounds the object. ");
paragraph.AddText("The distance between the shape and the text is half an inch (457200 English measure units).");
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(457200, 457200, 457200, 0);
drawing.SetWrappingStyle("square");
drawing.SetSize(2 * 914400, 2 * 914400);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape was created with a size of 53x39 millimeters, then resized to the size of 2x2 inches.");
document.Push(paragraph);