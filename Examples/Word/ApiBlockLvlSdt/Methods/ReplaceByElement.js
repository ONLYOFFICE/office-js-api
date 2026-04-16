// Replace the content control with a paragraph in a document.

// How to replace the block content control with another document element (paragraph, table, or block content control).

// Create the block-level content control object and replace it with the paragraph object in a document.

// Replace the block level content control with a text in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Name");
let paragraph = Api.CreateParagraph();
paragraph.AddText("The content control was replaced with the current paragraph.");
blockLvlSdt.ReplaceByElement(paragraph);