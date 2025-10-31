// This example shows how to get an array of tables from the current selection.

const doc = Api.GetDocument();

const table = Api.CreateTable(2, 1);
table.GetCell(0, 0).GetContent().GetElement(0).AddText('Cell 1');
table.GetCell(0, 1).GetContent().GetElement(0).AddText('Cell 2');
doc.Push(table);

table.Select();

const selection = doc.GetSelection();
const tables = selection.GetTables();

const paragraph = Api.CreateParagraph();
paragraph.AddText('Number of tables in selection: ' + tables.length);
doc.Push(paragraph);
