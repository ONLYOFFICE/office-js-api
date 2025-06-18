// This example replaces the content control with a paragraph.

// How to replace the block content control with another document element (paragraph, table, or block content control).

// Creates the ApiBlockLvlSdt object and replaces it with the ApiParagraph object.

// Replaces the block level content control with a text.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Name");
let paragraph = Api.CreateParagraph();
paragraph.AddText("The content control was replaced with the current paragraph.");
blockLvlSdt.ReplaceByElement(paragraph);