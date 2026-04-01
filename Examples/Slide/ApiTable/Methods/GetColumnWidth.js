// This example shows how to get the width of a specific table column.

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
