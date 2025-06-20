// This example specifies the vertical alignment for text within the current table cell.

// How to set the cell text vertical alignment.

// Create a table and set the text alignment of its cell from the row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(1);
row.SetHeight(30 * 36000);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetVerticalAlign("bottom");

slide.RemoveAllObjects();
slide.AddObject(table);
