// This example inserts a watermark on each document page.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("A watermark was inserted into this document.");
document.InsertWatermark("Watermark");