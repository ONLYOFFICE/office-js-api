// Read the color back from the fill of a shape in a document.

// How do I find out which color a shape is filled with in a document?

// Inspect the color of a solid fill and tell it apart from a gradient, which has no single color, in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());

let solidFill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let shape1 = Api.CreateShape("rect", 50 * 36000, 30 * 36000, solidFill, stroke);
paragraph.AddDrawing(shape1);
let color = shape1.GetFill().GetColor();
paragraph.AddText("Solid fill color: " + color.GetHex());
paragraph.AddLineBreak();

let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let gradientFill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let shape2 = Api.CreateShape("rect", 50 * 36000, 30 * 36000, gradientFill, stroke);
paragraph.AddDrawing(shape2);
paragraph.AddText("Gradient fill color: " + shape2.GetFill().GetColor());