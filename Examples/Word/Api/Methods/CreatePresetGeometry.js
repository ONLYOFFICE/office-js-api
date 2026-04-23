// Change a rectangle into a five-pointed star shape in a document.

// How do I apply a built-in star shape outline to an existing shape in a document?

// Replace a plain rectangle with a named preset shape and display its properties in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

// Create preset geometry
let presetGeometry = Api.CreatePresetGeometry("star5");
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("rect", 80 * 36000, 80 * 36000, fill, stroke);
shape.SetGeometry(presetGeometry);

paragraph.AddText("Preset geometry: " + presetGeometry.GetPreset());
paragraph.AddLineBreak();
paragraph.AddText("Is custom: " + presetGeometry.IsCustom());
paragraph.AddLineBreak();
paragraph.AddDrawing(shape);
paragraph.AddLineBreak();