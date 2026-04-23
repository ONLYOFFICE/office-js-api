// Check whether a shape's geometry is custom or uses a built-in preset in a document.

// How do I tell if a shape's geometry is custom-defined in a document?

// Distinguish between preset and hand-crafted geometry before deciding how to modify a shape in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
paragraph.AddText("Preset: " + geometry.GetPreset() + ", IsCustom: " + geometry.IsCustom());
paragraph.AddDrawing(shape);