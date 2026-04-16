// Set the checkbox value of an inline content control in a document.

// How do I set check box checked in a document?

// Set check box checked using an inline content control object in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddCheckBoxContentControl();
inlineControl.SetCheckBoxChecked(true);