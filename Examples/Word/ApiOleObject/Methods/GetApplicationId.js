// This example shows how to get the application ID from the OLE object.
let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
let appId = oleObject.GetApplicationId();
paragraph = Api.CreateParagraph();
paragraph.AddText("The OLE object application ID: " + appId);
doc.Push(paragraph);