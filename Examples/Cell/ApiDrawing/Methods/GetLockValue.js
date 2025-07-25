// This example shows how to get the lock value for the specified lock type of the drawing.

// How to know a lock type of a drawing.

// Set a drawing's lock type and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 1, 3 * 36000);
drawing.SetLockValue("noSelect", true);
let lockValue = drawing.GetLockValue("noSelect");
worksheet.GetRange("A1").SetValue("This drawing cannot be selected: " + lockValue);