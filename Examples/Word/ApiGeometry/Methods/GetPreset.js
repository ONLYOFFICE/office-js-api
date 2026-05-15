// Read the preset type name from a shape's geometry in a document.

// How do I get the preset identifier of a shape's geometry in a document?

// Identify which built-in shape template a geometry is based on before applying further changes in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
paragraph.AddText("Preset: " + geometry.GetPreset() + ", IsCustom: " + geometry.IsCustom());
paragraph.AddDrawing(shape);