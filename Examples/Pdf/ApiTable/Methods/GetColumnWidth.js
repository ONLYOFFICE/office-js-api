// Measure the width of a table column in a PDF.

// How do I find out how wide a table column is in a PDF?

// Read the column width value and display it in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.SetColumnWidth(0, Api.MillimetersToEmus(100));
const width = table.GetColumnWidth(0);

const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Column 0 width: ' + width + ' EMU');
content.Push(paragraph);

page.AddObject(table);
