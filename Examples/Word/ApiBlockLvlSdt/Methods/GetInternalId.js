//

const doc = Api.GetDocument();
const blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);

const internalId = blockLvlSdt.GetInternalId();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Internal ID: " + internalId);
doc.Push(paragraph);
