// Restore a shape fill color from JSON in a spreadsheet.

// How to from j s o n for a color in a spreadsheet?

// From j s o n and display the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const original = Api.RGB(93, 192, 232);
const json = JSON.parse(original.ToJSON());
const restored = original.FromJSON(json);

const fill = Api.CreateSolidFill(restored);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

worksheet.GetRange("A12").SetValue("Original: " + original.GetHex() + " | Restored: " + restored.GetHex());