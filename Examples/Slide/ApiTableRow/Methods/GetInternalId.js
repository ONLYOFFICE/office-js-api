// Get the internal identifier of a table row in a presentation.

// Identify a specific table row by the ID that the editor assigns to it in a presentation.

// Display the internal ID of the first table row, which stays valid only while the presentation is open.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
const internalId = row.GetInternalId();
paragraph.AddText("Row internal ID: " + internalId);
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);