// Create a picture content control in a document.

// How can I create the picture content control in a document?

// Create the picture content control in a document.

let doc = Api.GetDocument();
let cc = Api.CreatePictureContentControl(2000000, 2000000);
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);