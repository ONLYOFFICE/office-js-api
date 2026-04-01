// This example shows how to get the height of a specific table row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
row.SetHeight(Api.MillimetersToEmus(20));

slide.RemoveAllObjects();
slide.AddObject(table);

const height = row.GetHeight();
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Row height: ' + height + ' EMU');
content.Push(paragraph);
