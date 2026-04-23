// Retrieve the shape geometry and check if it is a preset or custom shape in a presentation.

// How do I learn about a shape's geometry in a presentation?

// Get the preset type and check whether a shape uses custom geometry in a presentation.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
shape.GetDocContent().GetElement(0).AddText("Preset: " + geometry.GetPreset() + ", IsCustom: " + geometry.IsCustom());
shape.SetPosition(1000000, 1000000);
slide.AddObject(shape);