// This example shows how to get the background color of the block-level container.
let doc = Api.GetDocument();

function colorToText(color){
    if (!color)
        return "none";

    return "rgba(" + color.r + ", " + color.g + ", " + color.b + ", " + color.a + ")";
}
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetBackgroundColor(0, 0, 255, 40);
let color = blockLvlSdt.GetBackgroundColor();
blockLvlSdt.GetContent().GetElement(0).AddText("BackgroundColor: " + colorToText(color));
doc.AddElement(0, blockLvlSdt);

blockLvlSdt = Api.CreateBlockLvlSdt();
color = blockLvlSdt.GetBackgroundColor();
blockLvlSdt.GetContent().GetElement(0).AddText("BackgroundColor: " + colorToText(color));
doc.AddElement(1, blockLvlSdt);