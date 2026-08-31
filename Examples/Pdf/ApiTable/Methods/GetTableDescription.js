// Get the description of a table in a PDF.

// Read back the accessible description of a table in a PDF.

// Create a table, set its description, and display it in the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.SetTableDescription('Sales data for Q1 2025');
const description = table.GetTableDescription();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Table description: ' + description);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
