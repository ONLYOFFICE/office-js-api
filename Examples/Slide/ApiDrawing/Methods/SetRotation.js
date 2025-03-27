// This example shows how to set the rotation angle to the drawing.
var presentation = Api.GetPresentation();
var slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
var fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var stroke = Api.CreateStroke(0, Api.CreateNoFill());
var shape = Api.CreateShape("rect", 130 * 36000, 10 * 36000, fill, stroke);
shape.SetPosition(100000, 2500000);
shape.SetRotation(90);
let rotAngle = shape.GetRotation();
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Drawing rotation angle is set to: " + rotAngle + " degrees");
slide.AddObject(shape);