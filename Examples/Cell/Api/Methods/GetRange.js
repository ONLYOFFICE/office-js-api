// This example shows how to get the ApiRange object by the range reference.
// How to get a range object using an address.
// Update a rabge knowing its cell address.
var oWorksheet = Api.GetActiveSheet();
var oRange = Api.GetRange("A1:C1");
oRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
oWorksheet.GetRange("A3").SetValue("The color was set to the background of cells A1:C1.");