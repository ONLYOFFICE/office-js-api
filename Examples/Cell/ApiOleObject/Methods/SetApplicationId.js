// This example sets the application ID to the current OLE object.

// How to set application id of OLE object.

// Add Ole object, set its application id and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let oleObject = worksheet.AddOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}", 0, 2 * 36000, 4, 3 * 36000);
oleObject.SetApplicationId("asc.{E5773A43-F9B3-4E81-81D9-CE0A132470E7}");