// Set the tag color for the container in a document.

// Create a block content control and set the color to it in a document.

// How to set the color to the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetColor(Api.RGB(0, 0, 255));
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a blue tag color.");
doc.AddElement(0, blockLvlSdt);