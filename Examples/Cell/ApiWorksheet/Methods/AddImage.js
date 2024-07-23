// This example adds an image to the sheet with the parameters specified.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000, 0, 2 * 36000, 0, 3 * 36000);
builder.SaveFile("xlsx", "AddImage.xlsx");
builder.CloseFile();