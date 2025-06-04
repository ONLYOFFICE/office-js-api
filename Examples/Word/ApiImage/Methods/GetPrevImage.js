// This example shows how to get the previous inline image if exists.

// How to add the previous drawing to the paragraph.

// Get the previous drawing and add it separated with a line break.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let image1 = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", 60 * 36000, 35 * 36000);
paragraph.AddDrawing(image1);
let image2 = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", 60 * 36000, 35 * 36000);
paragraph.AddLineBreak();
paragraph.AddDrawing(image2);
let prevImage = image2.GetPrevImage();
let copyImage = prevImage.Copy();
paragraph.AddLineBreak();
paragraph.AddDrawing(copyImage);