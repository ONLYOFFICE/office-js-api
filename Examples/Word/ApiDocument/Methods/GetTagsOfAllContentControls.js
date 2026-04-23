// Collect the tags assigned to all content controls in a document.

// How do I list every content control tag present in a document?

// Identify and display the tag values of both inline and block-level content controls for auditing purposes.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.AddText("Inline content control");
inlineLvlSdt.SetTag("Tag 1");
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("Block text content control");
blockLvlSdt.SetTag("Tag 2");
doc.AddElement(0, blockLvlSdt);
let tags = doc.GetTagsOfAllContentControls();
paragraph = Api.CreateParagraph();
paragraph.AddText("Content controls tags: ");
paragraph.AddLineBreak();
for (let i = 0; i < tags.length; i++ ){
	paragraph.AddText(tags[i]);
	paragraph.AddLineBreak();
}
doc.Push(paragraph);