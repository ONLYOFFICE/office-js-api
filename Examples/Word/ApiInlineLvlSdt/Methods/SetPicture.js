// Insert an image into a picture content control in a document.

// How do I load an image from a URL into a picture content control in a document?

// Replace the default placeholder of a picture control with an actual image in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddPictureContentControl();
contentControl.SetPicture('https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg');