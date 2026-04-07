// This example gets the tag color of the container.

// Creates a block content control, sets the color to it, and returns its color.

// How to return the color of the ApiBlockLvlSdt object.

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
