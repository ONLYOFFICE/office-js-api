// This example shows how to get the string data from the OLE object.

// How to get raw data from the OLE object content.

// Retrieve content of the OLE object and insert it to the document.

let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
let data = oleObject.GetData();
paragraph = Api.CreateParagraph();
paragraph.AddText("The OLE object data: " + data);
doc.Push(paragraph);