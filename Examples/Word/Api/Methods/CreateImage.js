// This example creastes an image and pastes it into the document.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let image = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", 60 * 36000, 35 * 36000);
paragraph.AddDrawing(image);