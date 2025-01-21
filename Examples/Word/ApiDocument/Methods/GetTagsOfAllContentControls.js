// This example shows how to get a list of all tags that are used for all content controls in the document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.AddText("Inline content control");
inlineLvlSdt.SetTag("Tag 1");
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("Block text content control");
blockLvlSdt.SetTag("Tag 2");
document.AddElement(0, blockLvlSdt);
let tags = document.GetTagsOfAllContentControls();
paragraph = Api.CreateParagraph();
paragraph.AddText("Content controls tags: ");
paragraph.AddLineBreak();
for (let i = 0; i < tags.length; i++ ){
	paragraph.AddText(tags[i]);
	paragraph.AddLineBreak();
}
document.Push(paragraph);