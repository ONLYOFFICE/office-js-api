// Get the ID of the container in a document.

// How do I get the id in a document?

// Get the id using a block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetId("4815162342");
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with an ID set to it.");
doc.AddElement(0, blockLvlSdt);

let contentControlId = blockLvlSdt.GetId();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Id: " + contentControlId);
doc.Push(paragraph);