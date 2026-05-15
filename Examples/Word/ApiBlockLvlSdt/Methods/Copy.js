// Duplicate a content control and place the copy in a document.

// How do I copy a content control and add the duplicate to the same document?

// Reuse a content control by making an exact copy and appending it elsewhere in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = blockLvlSdt.GetContent().GetElement(0);
paragraph.AddText("This is an block level content control.");
doc.Push(blockLvlSdt);
doc.Push(blockLvlSdt.Copy());