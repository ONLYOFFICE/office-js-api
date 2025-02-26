// This example creates a solid fill to apply to the object using a selected solid color as the object background.

// Create a solid fill to set a background color.

// How to create a solid color to fill a shape.

var oWorksheet = Api.GetActiveSheet();
var oRGBColor = Api.CreateRGBColor(255, 111, 61);
var oFill = Api.CreateSolidFill(oRGBColor);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 1, 3 * 36000);