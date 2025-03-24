// This example creates an Ole object and inserts it into the document.

// Creates the ApiOleObject object and adds it to the first paragraph of the document.

// How to create an Ole object using the specified image source, width, height, Ole data, application ID and insert it into the ApiParagraph class. 

let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);