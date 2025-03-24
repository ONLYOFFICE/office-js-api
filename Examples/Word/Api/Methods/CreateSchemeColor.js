// This example shows how to create a scheme color with the 'dk1' identifier.

// Creates a complex color scheme using the 'dk1' scheme identifier.

// How to create the ApiSchemeColor object and use it as a background for the ApiShape object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateSchemeColor("dk1"));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("curvedUpArrow", 5930900, 595605, fill, stroke);
paragraph.AddDrawing(shape);