// Get the content control position within its parent element in a document.

// Create a block content control, add it to the current document, and return its position in the document.

// How to get the position of the block-level content control object within the document class.

// Specify the position of the block container within the parent document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let run = Api.CreateRun();
run.AddText("Number of paragraph elements at this point: ");
run.AddTabStop();
run.AddText("" + paragraph.GetElementsCount());
run.AddLineBreak();
paragraph.AddElement(run);
run.AddText("Number of paragraph elements after we added a text run: ");
run.AddTabStop();
run.AddText("" + paragraph.GetElementsCount());
doc.AddElement(0, paragraph);
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
let position = blockLvlSdt.GetPosInParent();
blockLvlSdt = doc.GetElement(position);
blockLvlSdt.SetPlaceholderText("Content control");