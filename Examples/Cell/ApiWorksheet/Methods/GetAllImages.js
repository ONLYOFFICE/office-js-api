// This example shows how to get all images from the sheet.
// How to get all images.
// Get all images as an array.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000, 0, 2 * 36000, 0, 3 * 36000);
var aImages = oWorksheet.GetAllImages();
var sClassType = aImages[0].GetClassType();
oWorksheet.GetRange("A10").SetValue("Class Type = " + sClassType);