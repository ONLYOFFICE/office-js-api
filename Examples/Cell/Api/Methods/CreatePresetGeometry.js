// Apply a built-in shape outline to an existing shape in a spreadsheet.

// How do I assign a predefined outline style to a shape in a spreadsheet?

// Change a shape's contour to one of the standard outline types available in a spreadsheet.

let worksheet = Api.GetActiveSheet();

// Create shape with preset geometry
let presetGeometry = Api.CreatePresetGeometry("roundRect");

let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 2, 0, 2, 2);
shape.SetGeometry(presetGeometry);

worksheet.GetRange("A1").SetValue("Preset Shape Info:");
worksheet.GetRange("A2").SetValue("Type: " + presetGeometry.GetPreset());
worksheet.GetRange("A3").SetValue("Is custom: " + presetGeometry.IsCustom());