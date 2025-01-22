// This example shows how to create a scheme color with the 'dk1' identifier.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateSchemeColor("dk1"));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("curvedUpArrow", 5930900, 595605, fill, stroke);
paragraph.AddDrawing(shape);