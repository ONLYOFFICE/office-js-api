// Read back the transparency of a shape's fill in a document.

// How do I find out how transparent a shape's fill is in a document?

// Check the opacity that was applied to a shape's fill in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());

let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
fill.SetTransparent(39);
let shape = Api.CreateShape("rect", 50 * 36000, 30 * 36000, fill, stroke);
paragraph.AddDrawing(shape);

let appliedFill = shape.GetFill();
paragraph.AddText("Fill transparency: " + appliedFill.GetTransparent());
