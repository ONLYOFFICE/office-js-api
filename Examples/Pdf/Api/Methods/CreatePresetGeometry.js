// Apply a built-in shape geometry to an object in a PDF.

// How do I use a predefined shape like a star or arrow in a PDF?

// Assign a preset shape form to a drawing and display its properties in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

// Create preset geometry shape
let presetGeometry = Api.CreatePresetGeometry("star8");
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 0));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 150, 0)));
let shape = Api.CreateShape("rect", 80 * 36000, 80 * 36000, fill, stroke);
shape.SetGeometry(presetGeometry);
shape.SetPosition(1000000, 1000000);
let docContent = shape.GetContent();
if (docContent)
{
    let paragraph = docContent.GetElement(0);
    paragraph.AddText("Preset: " + presetGeometry.GetPreset() + " (Custom: " + presetGeometry.IsCustom() + ")");
}
page.AddObject(shape);