// This example gets a class type and inserts it into the document.

// How to get a class type of ApiImage.

// Retrieve class type of ApiImage object and insert it to the slide.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let drawing = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", 60 * 36000, 35 * 36000);
paragraph.AddDrawing(drawing);
let classType = drawing.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);