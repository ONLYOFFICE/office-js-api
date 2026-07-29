// Export table row formatting settings to a JSON representation in a PDF.

// Save the formatting settings of a table row as reusable data in a PDF.

// Build row properties, convert them to a JSON string, and display the result length in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const rowPr = Api.CreateTableRowPr();
rowPr.SetHeight('atLeast', 720);
rowPr.SetTableHeader(true);
const json = rowPr.ToJSON();

const paragraph = Api.CreateParagraph();
paragraph.AddText('Row properties JSON length: ' + json.length);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
