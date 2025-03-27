// This example shows how to get the border color of the block-level container.
let doc = Api.GetDocument();

function colorToText(color){
    if (!color)
        return "none";

    return "rgba(" + color.r + ", " + color.g + ", " + color.b + ", " + color.a + ")";
}
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetBorderColor(0, 0, 255, 255);
let color = blockLvlSdt.GetBorderColor();
blockLvlSdt.GetContent().GetElement(0).AddText("BorderColor: " + colorToText(color));
doc.AddElement(0, blockLvlSdt);

blockLvlSdt = Api.CreateBlockLvlSdt();
color = blockLvlSdt.GetBorderColor();
blockLvlSdt.GetContent().GetElement(0).AddText("BorderColor: " + colorToText(color));
doc.AddElement(1, blockLvlSdt);