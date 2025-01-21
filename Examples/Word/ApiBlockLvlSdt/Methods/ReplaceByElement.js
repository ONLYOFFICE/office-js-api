// This example replaces the content control with a paragraph.
let document = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
document.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Name");
let paragraph = Api.CreateParagraph();
paragraph.AddText("The content control was replaced with the current paragraph.");
blockLvlSdt.ReplaceByElement(paragraph);