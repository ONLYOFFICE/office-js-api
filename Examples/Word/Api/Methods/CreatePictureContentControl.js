// Insert a picture placeholder field into a paragraph in a document.

// How do I add an image placeholder that users can click to insert a picture in a document?

// Place a fixed-size picture content control inside a new paragraph in a document.

let doc = Api.GetDocument();
let cc = Api.CreatePictureContentControl(2000000, 2000000);
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);