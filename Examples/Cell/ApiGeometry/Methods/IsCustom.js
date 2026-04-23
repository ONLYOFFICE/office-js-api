// Check whether a shape uses a hand-drawn outline rather than a built-in template in a spreadsheet.

// How do I tell if a shape's geometry was defined manually instead of chosen from a preset list in a spreadsheet?

// Verify that a shape carries a fully custom outline rather than one of the standard shapes in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = worksheet.AddShape("star5", 60 * 36000, 60 * 36000, fill, stroke, 0, 0, 2, 2);
let geometry = shape.GetGeometry();
worksheet.GetRange("A1").SetValue("Preset: " + geometry.GetPreset());
worksheet.GetRange("A2").SetValue("IsCustom: " + geometry.IsCustom());