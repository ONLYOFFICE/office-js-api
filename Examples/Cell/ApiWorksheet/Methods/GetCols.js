// This example shows how to get the ApiRange object that represents all the cells on the columns range.
var oWorksheet = Api.GetActiveSheet();
var oCols = oWorksheet.GetCols("A1:C1");
oCols.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));