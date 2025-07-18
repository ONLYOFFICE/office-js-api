// This example shows how to get a collection of image objects from the document content.

// Get all images added to the document.

// How to retrieve all images and display the class type of the first one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
paragraph = Api.CreateParagraph();
let image = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", 95 * 36000, 45 * 36000);
paragraph.AddDrawing(image);
let docContent = shape.GetDocContent();
docContent.AddElement(0, paragraph);
let images = docContent.GetAllImages();
let classType = images[0].GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);