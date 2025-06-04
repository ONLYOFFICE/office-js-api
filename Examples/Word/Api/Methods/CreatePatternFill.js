// This example creates a pattern fill and applies it to the object using the selected pattern as the object background.

// Creates the ApiFill object using the "dashDnDiag" pattern type and applies it to the created shape.

// How to create a pattern fill for the ApiShape object background.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreatePatternFill("dashDnDiag", Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);