// Set the background color for the block-level container in a document.

// How can I set background color using a block-level content control in a document?

// Set background color for a block-level content control in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetBackgroundColor(Api.RGBA(0, 0, 255, 40));
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a blue transparent background.");
doc.AddElement(0, blockLvlSdt);