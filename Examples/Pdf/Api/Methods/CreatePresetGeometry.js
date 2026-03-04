// This example demonstrates creating a preset geometry.
const doc = Api.GetDocument();
const page = doc.GetPage(0);

// Create preset geometry shape
let presetGeometry = Api.CreatePresetGeometry("star8");
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 0));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 150, 0)));
let shape = Api.CreateShape("rect", 80 * 36000, 80 * 36000, fill, stroke);
shape.SetGeometry(presetGeometry);
shape.SetPosition(1000000, 1000000);
let docContent = shape.GetDocContent();
if (docContent)
{
    let paragraph = docContent.GetElement(0);
    paragraph.AddText("Preset: " + presetGeometry.GetPreset() + " (Custom: " + presetGeometry.IsCustom() + ")");
}
page.AddObject(shape);