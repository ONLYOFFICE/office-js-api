// This example shows how to create a radial gradient fill.

// Creates the ApiFill object which represents a radial gradient fill and applies it to the created shape.

// How to create a radial gradient fill and apply it to the object using the selected radial gradient as the object background.

// Creates a radial gradient fill from an array of the gradient color stops and uses it as a background for the ApiShape class.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);