// This example gets a class type and pastes it into the sheet.

// How to get a class type of ApiGroup.

// Get a class type of ApiGroup and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let fill1 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let fill2 = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill1, stroke, 0, 2 * 36000, 0, 3 * 36000);
let shape2 = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill2, stroke, 0, 15 * 36000, 0, 30 * 36000);

let group = worksheet.GroupDrawings([shape1, shape2]);
let classType = group.GetClassType();

let docContent1 = shape1.GetDocContent();
let paragraph1 = docContent1.GetElement(0);
paragraph1.AddText("Class Type = " + classType);

let docContent2 = shape2.GetDocContent();
let paragraph2 = docContent2.GetElement(0);
paragraph2.AddText("Class Type = " + classType);
