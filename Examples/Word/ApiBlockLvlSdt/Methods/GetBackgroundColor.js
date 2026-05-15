// Read the background color of a content control in a document.

// How do I get the background color set on a content control in a document?

// Check what background color a content control has and display its hex value in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetBackgroundColor(Api.RGBA(200, 200, 255, 255));
let color = blockLvlSdt.GetBackgroundColor();
blockLvlSdt.GetContent().GetElement(0).AddText("BackgroundColor: " + (color ? color.GetHex() : "none"));
doc.AddElement(0, blockLvlSdt);

blockLvlSdt = Api.CreateBlockLvlSdt();
color = blockLvlSdt.GetBackgroundColor();
blockLvlSdt.GetContent().GetElement(0).AddText("BackgroundColor: " + (color ? color.GetHex() : "none"));
doc.AddElement(1, blockLvlSdt);