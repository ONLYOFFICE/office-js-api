// This example shows how to get a collection of image objects from the document.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let image1 = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", 60 * 36000, 35 * 36000);
paragraph.AddDrawing(image1);
let image2 = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", 60 * 36000, 35 * 36000);
paragraph.AddDrawing(image2);
let images = doc.GetAllImages();
let classType = images[0].GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);