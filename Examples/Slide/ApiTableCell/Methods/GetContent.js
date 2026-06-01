// Get the content object from a table cell.

// Access the document content that the cell contains.

// Retrieve the content object and add text to a table cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text in the cell.");
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);