// This example shows how to create a stroke.

// Create a stroke using the specified width and fill and apply it to the shape from the first paragraph.

// How to create the ApiStroke object and use it to create the ApiShape object.

// Specifies the parameters of the shape stroke.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
let shape = Api.CreateShape("roundRect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);