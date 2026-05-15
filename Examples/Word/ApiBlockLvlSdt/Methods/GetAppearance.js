// Read the visual appearance setting of a content control in a document.

// How do I check how a content control is displayed in a document?

// Display whether a content control shows a bounding box, tags, or is hidden in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = Api.CreateBlockLvlSdt();
let appearance = contentControl.GetAppearance();
contentControl.GetContent().GetElement(0).AddText("The appearance of this content control: " + appearance);
doc.Push(contentControl);