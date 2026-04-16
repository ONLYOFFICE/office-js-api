// Set image to picture content control in a document.

// How to set picture for an inline content control in a document?

// Set picture and display the result in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddPictureContentControl();
contentControl.SetPicture('https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg');