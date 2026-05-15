// Select an inline content control to bring it into focus in a document.

// How do I programmatically select an inline content control in a document?

// Highlight a content control so the cursor lands on it when navigating in a document.

let doc = Api.GetDocument();
let checkbox = doc.AddCheckBoxContentControl();
checkbox.Select();