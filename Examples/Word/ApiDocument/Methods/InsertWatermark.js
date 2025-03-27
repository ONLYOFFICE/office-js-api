// This example inserts a watermark on each document page.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("A watermark was inserted into this document.");
doc.InsertWatermark("Watermark");