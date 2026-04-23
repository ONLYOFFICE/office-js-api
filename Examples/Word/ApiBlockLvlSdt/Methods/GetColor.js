// Read the highlight color of a content control in a document.

// How do I get the color assigned to a content control in a document?

// Check what color a content control has and display its hex value in a document.

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