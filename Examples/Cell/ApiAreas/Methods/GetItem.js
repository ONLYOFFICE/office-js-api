// This example shows how to get a single object from a collection by its ID.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1:D1");
oRange.SetValue("1");
oRange.Select();
var oAreas = oRange.GetAreas();
var oItem = oAreas.GetItem(1);
oRange = oWorksheet.GetRange('A5');
oRange.SetValue("The first item from the areas: ");
oRange.AutoFit(false, true);
oWorksheet.GetRange('B5').Paste(oItem);