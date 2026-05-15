// Retrieve all images embedded in document content in a document.

// How do I get every image from a content container in a document?

// Read the class type of the first image found inside a shape and display it as text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape('rect', 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
paragraph = Api.CreateParagraph();
const logoUrl = 'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png';
let image = Api.CreateImage(logoUrl, 95 * 36000, 45 * 36000);
paragraph.AddDrawing(image);
let docContent = shape.GetDocContent();
docContent.AddElement(0, paragraph);
let images = docContent.GetAllImages();
let classType = images[0].GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText('Class type: ' + classType);
doc.Push(paragraph);