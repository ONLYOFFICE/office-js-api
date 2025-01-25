// This example replaces the image with a new one.
let worksheet = Api.GetActiveSheet();
let drawing = worksheet.AddImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000, 0, 2 * 36000, 0, 3 * 36000);
// todo_example we don't have method ApiDrawing.Select() which is necessary for this example
worksheet.ReplaceCurrentImage("https://helpcenter.onlyoffice.com/images/Help/GettingStarted/Documents/big/EditDocument.png", 60 * 36000, 35 * 36000);