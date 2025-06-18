// This example adds an OLE object to the sheet with the parameters specified.

// How to add an OLE object to the worksheet specifying its url, size, etc.

// Insert an OLE object to the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}", 0, 2 * 36000, 4, 3 * 36000);
