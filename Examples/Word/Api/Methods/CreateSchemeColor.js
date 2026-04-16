// Create a scheme color with the 'dk1' identifier in a document.

// Create a complex color scheme using the 'dk1' scheme identifier in a document.

// How to create the scheme color object and use it as a background for the shape object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateSchemeColor("dk1"));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("curvedUpArrow", 5930900, 595605, fill, stroke);
paragraph.AddDrawing(shape);