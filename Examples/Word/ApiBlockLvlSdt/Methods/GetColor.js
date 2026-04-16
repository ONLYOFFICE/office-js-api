// Get the tag color of the container in a document.

// Create a block content control, set the color to it, and return its color in a document.

// How to return the color of the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetColor(Api.RGB(0, 0, 255));
let color = blockLvlSdt.GetColor();
blockLvlSdt.GetContent().GetElement(0).AddText("Color: " + (color ? color.GetHex() : "none"));
doc.AddElement(0, blockLvlSdt);

blockLvlSdt = Api.CreateBlockLvlSdt();
color = blockLvlSdt.GetColor();
blockLvlSdt.GetContent().GetElement(0).AddText("Color: " + (color ? color.GetHex() : "none"));
doc.AddElement(1, blockLvlSdt);