// Get the width of a specific table column in a presentation.

// How to get the column width for a table in a presentation?

// Get the column width and display the result in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(3, 3);
table.SetColumnWidth(0, Api.MillimetersToEmus(100));
const width = table.GetColumnWidth(0);

const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Column 0 width: ' + width + ' EMU');
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);