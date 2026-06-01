// Set the spacing between text and the left edge of a table cell in a presentation.

// How do I add space to the left of text in a table cell in a presentation?

// Adjust the left margin to control padding in a table cell in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetCellMarginLeft(720);

slide.RemoveAllObjects();
slide.AddObject(table);