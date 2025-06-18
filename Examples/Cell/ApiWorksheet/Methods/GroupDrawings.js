// This example show how to create a group.

// How to group two shapes.

// Group objects from the sheet.

const worksheet = Api.GetActiveSheet();
const fill1 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const fill2 = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape1 = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill1, stroke, 0, 2 * 36000, 0, 3 * 36000);
const shape2 = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill2, stroke, 0, 15 * 36000, 0, 30 * 36000);
worksheet.GroupDrawings([shape1, shape2]);