// Set the spacing between text and the right edge of a table cell in a presentation.

// How do I add space to the right of text in a table cell in a presentation?

// Adjust the right margin to control padding in a table cell in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetCellMarginRight(600);

slide.RemoveAllObjects();
slide.AddObject(table);