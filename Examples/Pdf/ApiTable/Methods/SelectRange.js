// Select a range of cells in a table in a PDF.

// How do I select several adjacent cells in a table at once in a PDF?

// Create a table and select a 2x2 block of cells starting from the top-left corner.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
page.AddObject(table);

table.SelectRange(0, 0, 1, 1);
const paragraph = Api.CreateParagraph();
paragraph.AddText('Selected cells: ' + table.GetSelectedCells().length);
table.GetCell(0, 0).GetContent().Push(paragraph);
