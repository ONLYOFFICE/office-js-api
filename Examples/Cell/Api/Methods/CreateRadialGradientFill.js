// This example creates a radial gradient fill to apply to the object using the selected radial gradient as the object background.
let worksheet = Api.GetActiveSheet();
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000));
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 1, 3 * 36000);