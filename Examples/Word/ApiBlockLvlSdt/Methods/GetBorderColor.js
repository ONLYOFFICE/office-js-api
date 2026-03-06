// This example shows how to get the border color of the block-level container.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetBorderColor(Api.RGB(0, 0, 255));
let color = blockLvlSdt.GetBorderColor();
blockLvlSdt.GetContent().GetElement(0).AddText("BorderColor: " + (color ? color.GetHex() : "none"));
doc.AddElement(0, blockLvlSdt);

blockLvlSdt = Api.CreateBlockLvlSdt();
color = blockLvlSdt.GetBorderColor();
blockLvlSdt.GetContent().GetElement(0).AddText("BorderColor: " + (color ? color.GetHex() : "none"));
doc.AddElement(1, blockLvlSdt);
