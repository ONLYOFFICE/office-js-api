// This example show get drawing parent sheet.
// How to know a parent sheet of a shape.
// Get a shape's parent sheet and display it in the worksheet.
let oWorksheet = Api.GetActiveSheet();
let oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
let oShape = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
let oParentSheet = oShape.GetParentSheet();

let oDocContent = oShape.GetDocContent();
let oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("Parent sheet name is " + oParentSheet.GetName());