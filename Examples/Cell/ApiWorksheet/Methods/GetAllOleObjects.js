// This example shows how to get all OLE objects from the sheet.
let worksheet = Api.GetActiveSheet();
worksheet.AddOleObject("https://i.ytimg.com/vi_webp/SKGz4pmnpgY/sddefault.webp", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}", 0, 2 * 36000, 4, 3 * 36000);
let oleObjects = worksheet.GetAllOleObjects();
let appId = oleObjects[0].GetApplicationId();
worksheet.GetRange("A1").SetValue("The application ID for the current OLE object: " + appId);