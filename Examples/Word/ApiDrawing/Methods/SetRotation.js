// This example shows how to set the rotation angle to the drawing.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 110 * 36000, 10 * 36000, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetRotation(90);
let rotAngle = drawing.GetRotation();
let docContent = drawing.GetContent();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing rotation angle is set to: " + rotAngle + " degrees");
docContent.AddElement(0, paragraph);