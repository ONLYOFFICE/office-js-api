// This example show how to create a group.
let oWorksheet = Api.GetActiveSheet();
let oFill1 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let oFill2 = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
let oShape1 = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill1, oStroke, 0, 2 * 36000, 0, 3 * 36000);
let oShape2 = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill2, oStroke, 0, 15 * 36000, 0, 30 * 36000);
oWorksheet.GroupDrawings([oShape1, oShape2]);