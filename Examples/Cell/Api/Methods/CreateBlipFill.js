// Fill a shape with an image background by creating a tiled blip fill in a spreadsheet.

// How do I use an image as the background fill of a shape in a spreadsheet?

// Apply a repeating image texture to a shape instead of a solid color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", "tile");
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);