// Set a background color on a content control in a document.

// How do I change the background color of a content control in a document?

// Highlight a content control with a colored background to make it stand out in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetBackgroundColor(Api.RGBA(0, 0, 255, 40));
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a blue transparent background.");
doc.AddElement(0, blockLvlSdt);