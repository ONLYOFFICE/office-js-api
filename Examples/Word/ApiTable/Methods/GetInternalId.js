// Get the internal ID of a table in a document.

// How do I get the internal id in a document?

// Get the internal id using a table object in a document.

const doc = Api.GetDocument();
const table = Api.CreateTable(2, 1);
table.SetWidth('percent', 100);
doc.Push(table);

const internalId = table.GetInternalId();

const cell = table.GetCell(0, 0);
const cellContent = cell.GetContent();
const paragraph = cellContent.GetElement(0);
paragraph.AddText('This table internal ID: ' + internalId);