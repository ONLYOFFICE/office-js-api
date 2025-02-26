// This example sets the data to the current OLE object.

// How to change content of OLE object.

// Add Ole object, set its data and display it in the worksheet.

var oWorksheet = Api.GetActiveSheet();
var oOleObject = oWorksheet.AddOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}", 0, 2 * 36000, 4, 3 * 36000);
oOleObject.SetData("https://youtu.be/eJxpkjQG6Ew");