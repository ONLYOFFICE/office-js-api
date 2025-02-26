// This example gets a class type and inserts it into the document.

// How to get a class type of ApiParagraph.

// Get a class type of ApiParagraph and display it in the worksheet.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var sClassType = oParagraph.GetClassType();
oParagraph.AddText("Class Type = " + sClassType);