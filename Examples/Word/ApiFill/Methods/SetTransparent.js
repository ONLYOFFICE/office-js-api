// Make a shape's fill semi-transparent in a document.

// Adjust how see-through a shape's fill is in a document.

// Fade a shape's solid fill so the content behind it shows through in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());

let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
fill.SetTransparent(0.4);
let shape = Api.CreateShape("rect", 50 * 36000, 30 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
