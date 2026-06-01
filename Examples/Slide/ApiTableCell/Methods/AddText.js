// Append text to the last paragraph in a table cell in a presentation.

// How do I add text to a table cell in a presentation?

// Insert a sentence into the last paragraph of a cell to populate a table in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(0).GetCell(0);
cell.AddText("Cell content.");

slide.AddObject(table);
