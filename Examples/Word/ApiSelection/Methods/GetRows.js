// This example shows how to get an array of table rows from the current selection.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Table with multiple rows:');

const table = Api.CreateTable(2, 4);
for (let row = 0; row < 4; row++) {
	for (let col = 0; col < 2; col++) {
		const cellParagraph = table.GetCell(row, col).GetContent().GetElement(0);
		cellParagraph.AddText('Row ' + (row + 1) + ' Col ' + (col + 1));
	}
}
doc.Push(table);

table.Select();

const selection = doc.GetSelection();
const rows = selection.GetRows();

paragraph = Api.CreateParagraph();
paragraph.AddText('Number of rows in selection: ' + rows.length);
doc.Push(paragraph);
