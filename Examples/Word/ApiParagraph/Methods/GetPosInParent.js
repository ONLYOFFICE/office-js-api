// Determine the index position of a paragraph within its parent element in a document.

// How do I find where a paragraph sits inside its containing element in a document?

// Use a paragraph's position to re-select and bold it after inserting additional elements in a document.

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
blockLvlSdt.SetPlaceholderText("Content control");
let position = paragraph.GetPosInParent();
paragraph = doc.GetElement(position);
paragraph.SetBold(true);