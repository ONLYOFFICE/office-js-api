// This example demonstrates creating a preset geometry.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

// Create preset geometry
let presetGeometry = Api.CreatePresetGeometry("star5");
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(200, 100, 0)));
let shape = Api.CreateShape("rect", 80 * 36000, 80 * 36000, fill, stroke);
shape.SetGeometry(presetGeometry);

paragraph.AddText("Preset geometry: " + presetGeometry.GetPreset());
paragraph.AddLineBreak();
paragraph.AddText("Is custom: " + presetGeometry.IsCustom());
paragraph.AddLineBreak();
paragraph.AddDrawing(shape);
paragraph.AddLineBreak();
