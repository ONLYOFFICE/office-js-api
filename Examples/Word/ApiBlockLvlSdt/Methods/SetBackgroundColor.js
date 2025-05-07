// This example shows how to set the background color for the block-level container.
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetBackgroundColor(0, 0, 255, 40);
blockLvlSdt.GetContent().GetElement(0).AddText("This is an inline text content control with a transparent blue background.");
doc.AddElement(0, blockLvlSdt);
