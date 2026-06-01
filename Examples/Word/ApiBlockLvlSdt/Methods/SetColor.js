// Set the tag color of a content control in a document.

// How do I change the tag color of a content control in a document?

// Color-code a content control tag to categorize or identify it visually in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetColor(Api.RGB(0, 0, 255));
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a blue tag color.");
doc.AddElement(0, blockLvlSdt);