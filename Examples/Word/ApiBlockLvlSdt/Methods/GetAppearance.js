// Add a text to the content control and get its appearance in a document.

// How do I get the appearance in a document?

// Get the appearance using a block-level content control object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = Api.CreateBlockLvlSdt();
let appearance = contentControl.GetAppearance();
contentControl.GetContent().GetElement(0).AddText("The appearance of this content control: " + appearance);
doc.Push(contentControl);