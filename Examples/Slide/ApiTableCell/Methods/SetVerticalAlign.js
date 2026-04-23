// Align text to the bottom, middle, or top of a table cell in a presentation.

// How do I position text vertically in a table cell in a presentation?

// Adjust the vertical alignment of text within a cell in a table in a presentation.

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