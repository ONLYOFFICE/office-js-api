// Get the internal identifier of a drawing object in a spreadsheet.

// Identify a specific shape by the ID that the editor assigns to it in a spreadsheet.

// Display the internal ID of a shape, which stays valid only while the spreadsheet is open.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 1, 3 * 36000);
let internalId = drawing.GetInternalId();
worksheet.SetColumnWidth(0, 15);
worksheet.GetRange("A1").SetValue("Internal ID = " + internalId);