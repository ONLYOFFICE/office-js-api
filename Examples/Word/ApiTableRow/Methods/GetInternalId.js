// Read the unique identifier assigned to a table row in a document.

// How do I obtain the built-in identifier that distinguishes one row from another in a document?

// Capture the hidden ID of a table row for tracking or comparison purposes in a document.

const doc = Api.GetDocument();
const table = Api.CreateTable(3, 3);
table.SetWidth('percent', 100);
doc.Push(table);

for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
	const colIndex = rowIndex;
	const cell = table.GetCell(rowIndex, colIndex);
	const cellParagraph = cell.GetContent().GetElement(0);
	const internalId = table.GetRow(rowIndex).GetInternalId();
	cellParagraph.AddText('This row internal ID: ' + internalId);
}