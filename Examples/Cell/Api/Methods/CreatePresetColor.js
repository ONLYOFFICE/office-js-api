// Apply a named preset color to a shape background in a spreadsheet.

// How do I use a built-in color preset to fill a shape in a spreadsheet?

// Give a shape a ready-made color without entering custom values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let presetColor = Api.CreatePresetColor("peachPuff");
let gs1 = Api.CreateGradientStop(presetColor, 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);