// Mark the first row as a repeated table header in a PDF.

// Set the header row property of a table row in a PDF.

// Mark the first row of a new table as its header row in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 5);
const headerRow = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText('Header row');
headerRow.SetTableHeader(true);
headerRow.GetCell(0).GetContent().Push(para);

page.AddObject(table);
