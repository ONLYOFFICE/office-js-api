// Get a named table style and apply it to a table in a PDF.

// Look up a built-in table style by name in a PDF document.

// Fetch "Dark Style 1 - Accent 2", rename it, and apply it to a 3x3 table in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const style = doc.GetStyle('Dark Style 1 - Accent 2');
style.SetName('My Custom Table Style');
table.SetStyle(style);
const paragraph = Api.CreateParagraph();
paragraph.AddText('New style name: ' + style.GetName());
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
