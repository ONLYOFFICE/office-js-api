// This example demonstrates creating a preset geometry in presentations.
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);

// Create preset geometry shape
let presetGeometry = Api.CreatePresetGeometry("star8");
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 0));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(200, 150, 0)));
let shape = Api.CreateShape("rect", 80 * 36000, 80 * 36000, fill, stroke);
shape.SetGeometry(presetGeometry);
shape.SetPosition(1000000, 1000000);
let docContent = shape.GetDocContent();
if (docContent)
{
    let paragraph = docContent.GetElement(0);
    paragraph.AddText("Preset: " + presetGeometry.GetPreset() + " (Custom: " + presetGeometry.IsCustom() + ")");
}
slide.AddObject(shape);