// This example shows how to get the paragraph position within its parent element.
let document = Api.GetDocument();
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
document.AddElement(0, paragraph);
let blockLvlSdt = Api.CreateBlockLvlSdt();
document.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Content control");
let position = paragraph.GetPosInParent();
paragraph = document.GetElement(position);
paragraph.SetBold(true);