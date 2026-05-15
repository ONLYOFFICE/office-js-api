// Fill a shape using a color taken from the document's active theme palette in a document.

// How do I use one of the document's theme colors as the solid fill for a shape in a document?

// Apply a theme-aware color to a shape so it updates automatically when the theme changes in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateSchemeColor("dk1"));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("curvedUpArrow", 5930900, 595605, fill, stroke);
paragraph.AddDrawing(shape);