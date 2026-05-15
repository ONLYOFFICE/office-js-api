// Rebuild a color from its stored JSON representation in a spreadsheet.

// How do I recreate a color object from a previously saved JSON value in a spreadsheet?

// Load a color back from a JSON snapshot and apply it to a shape in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const original = Api.RGB(93, 192, 232);
const json = JSON.parse(original.ToJSON());
const restored = original.FromJSON(json);

const fill = Api.CreateSolidFill(restored);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

worksheet.GetRange("A12").SetValue("Original: " + original.GetHex() + " | Restored: " + restored.GetHex());