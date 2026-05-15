// Change the text flow direction in a table cell in a presentation.

// How do I rotate text vertically in a table cell in a presentation?

// Set the text orientation to flow from top to bottom in a table cell in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
row.SetHeight(30 * 36000);
const cell = row.GetCell(0);
cell.SetTextDirection("tbrl");
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);