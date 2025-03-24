// This example shows how to create a solid fill.

// Creates a solid fill to apply to the shape using the selected solid color as the shape background.

// How to create the ApiFill object which represents a solid fill and apply it to the ApiShape class.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("roundRect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);