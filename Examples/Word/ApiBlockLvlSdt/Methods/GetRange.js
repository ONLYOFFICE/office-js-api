// Select a portion of text inside a content control and apply formatting to it in a document.

// How do I select a specific range of text within a content control in a document?

// Bold a section of text inside a content control by specifying start and end positions in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
let range = blockLvlSdt.GetRange(10, 16);
range.SetBold(true);