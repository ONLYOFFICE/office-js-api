// This example creates a blip fill to apply to the object using the selected image as the object background.
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateBlipFill("https://api.onlyoffice.com/content/img/docbuilder/examples/icon_DocumentEditors.png", "tile");
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);