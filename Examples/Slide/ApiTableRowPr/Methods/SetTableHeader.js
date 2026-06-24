// Mark the first row as a repeated table header in a presentation.

// Useful for setting a table row as a header row.

// Mark the first row as a header that repeats on each page.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 5);
const headerRow = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText("Header row");
headerRow.SetTableHeader(false);
headerRow.GetCell(0).GetContent().Push(para);
slide.RemoveAllObjects();
slide.AddObject(table);

//todo