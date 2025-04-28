// This example shows how to get a content control by ID
let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a block-level content control.");
let blockSdt = Api.CreateBlockLvlSdt(paragraph);
doc.AddElement(0, blockSdt);
let contentControl = doc.GetContentControl(blockSdt.GetInternalId());
if (contentControl) {
    blockSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
}