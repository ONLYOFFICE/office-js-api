// Duplicate an image and add the copy to the same paragraph in a document.

// How do I make a copy of an image in a document?

// Clone an image so that two identical pictures appear in a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let image = Api.CreateImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 60 * 36000, 45 * 36000);
paragraph.AddDrawing(image);

let copyImage = image.Copy();
paragraph.AddDrawing(copyImage);
