// Get the internal identifier of a table cell in a PDF.

// Identify a specific table cell by the ID that the editor assigns to it in a PDF.

// Display the internal ID of the first table cell, which stays valid only while the PDF is open.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
const internalId = cell.GetInternalId();
paragraph.AddText("Cell internal ID: " + internalId);
content.Push(paragraph);

page.AddObject(table);