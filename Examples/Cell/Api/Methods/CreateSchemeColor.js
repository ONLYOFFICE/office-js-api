// This example reates a complex color scheme selecting from one of the available schemes.
var oWorksheet = Api.GetActiveSheet();
var oSchemeColor = Api.CreateSchemeColor("dk1");
var oFill = Api.CreateSolidFill(oSchemeColor);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oWorksheet.AddShape("curvedUpArrow", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 1, 3 * 36000);