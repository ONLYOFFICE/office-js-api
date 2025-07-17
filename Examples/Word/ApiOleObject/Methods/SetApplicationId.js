// This example sets the application ID to the current OLE object.

// How to set application ID of the OLE object.

// Update the application ID of the OLE object.

let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
oleObject.SetApplicationId("asc.{E5773A43-F9B3-4E81-81D9-CE0A132470E7}");