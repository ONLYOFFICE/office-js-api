// Access the document content that contains a block content control.

// The parent is the document content that holds the block-level content control.

// Navigate from a block content control up to its parent and count its elements.

let doc = Api.GetDocument();
let blockSdt = Api.CreateBlockLvlSdt();
doc.Push(blockSdt);
let parent = blockSdt.GetParent();
let report = Api.CreateParagraph();
report.AddText("The parent holds " + parent.GetElementsCount() + " elements.");
doc.Push(report);
