// This example shows how to get an array of table cells from the current selection.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Table cells example:');

const table = Api.CreateTable(3, 3);
for (let row = 0; row < 3; row++) {
	for (let col = 0; col < 3; col++) {
		table.GetCell(row, col).GetContent().GetElement(0).AddText('Cell ' + (row * 3 + col + 1));
	}
}
doc.Push(table);

table.Select();

const selection = doc.GetSelection();
const cells = selection.GetCells();

paragraph = Api.CreateParagraph();
paragraph.AddText('Number of cells in selection: ' + cells.length);
doc.Push(paragraph);
