// This example shows how to get the selected content control or retrieve it by its ID.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
var blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("1 This is a block text content control. ");
doc.AddElement(0, blockLvlSdt);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("2 This is an inline text content control. ");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let contentControl = doc.GetContentControl(blockLvlSdt.GetInternalId());
contentControl.GetContent().GetElement(0).AddText("New text!");
inlineLvlSdt.Select();
let selectedContentControl = doc.GetContentControl();
selectedContentControl.AddText("Selected cc");
selectedContentControl.Select();