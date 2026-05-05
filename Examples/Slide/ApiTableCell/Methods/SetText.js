// Replace all content in a table cell with plain text in a presentation.

// How do I overwrite the text of a table cell in a presentation?

// Clear an existing cell and write a new sentence into it, preserving formatting in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(0).GetCell(0);
cell.AddText("Original cell content.");
cell.SetText("Updated cell content.");

slide.AddObject(table);
