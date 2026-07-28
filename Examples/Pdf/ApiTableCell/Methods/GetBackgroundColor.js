// Get the background color of a table cell in a PDF.

// Read back the background color applied to a table cell in a PDF.

// Set a background color and read it back in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
cell.SetBackgroundColor(255, 111, 61, false);
const color = cell.GetBackgroundColor();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Background color: ' + (color ? color.GetHex() : 'none'));
cell.GetContent().Push(paragraph);

page.AddObject(table);
