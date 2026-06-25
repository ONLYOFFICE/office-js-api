// Get the previous cell in a row in a presentation.

// Useful for getting the cell preceding the current one.

// Add text to the second cell and bold the previous one.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const cell = table.GetRow(0).GetCell(1);
const para = Api.CreateParagraph();
para.AddText("Cell 2");
cell.GetContent().Push(Api.CreateParagraph());
const prevCell = cell.GetPrevious();
const para2 = Api.CreateParagraph();
const run = Api.CreateRun();
run.AddText("Cell 1");
para2.AddElement(run);
prevCell.GetContent().Push(para2);
slide.RemoveAllObjects();
slide.AddObject(table);
