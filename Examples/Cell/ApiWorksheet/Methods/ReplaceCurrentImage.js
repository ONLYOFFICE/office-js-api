// This example replaces the image with a new one.
var oWorksheet = Api.GetActiveSheet();
var oDrawing = oWorksheet.AddImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000, 0, 2 * 36000, 0, 3 * 36000);
// todo_example we don't have method ApiDrawing.Select() which is necessary for this example
oWorksheet.ReplaceCurrentImage("https://helpcenter.onlyoffice.com/images/Help/GettingStarted/Documents/big/EditDocument.png", 60 * 36000, 35 * 36000);