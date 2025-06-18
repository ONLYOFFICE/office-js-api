// This example creates a solid fill to apply to the object using a selected solid color as the object background.

// Create a solid fill to set a background color.

// How to create a solid color to fill a shape.

let worksheet = Api.GetActiveSheet();
let rgbColor = Api.CreateRGBColor(255, 111, 61);
let fill = Api.CreateSolidFill(rgbColor);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);