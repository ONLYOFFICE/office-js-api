// Paint a shape with a single flat color as its background in a spreadsheet.

// How do I fill a shape with one uniform color in a spreadsheet?

// Cover a shape's surface with a plain, unblended color to make it stand out in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let rgbColor = Api.RGB(255, 111, 61);
let fill = Api.CreateSolidFill(rgbColor);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);