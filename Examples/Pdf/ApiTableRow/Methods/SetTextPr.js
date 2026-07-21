// Apply text formatting to all cells in a table row in a PDF.

// How do I change the text style for an entire row of a table in a PDF?

// Style the text across a full table row uniformly in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const row = table.GetRow(0);
row.GetCell(0).GetContent().AddText('First row');
const textPr = Api.CreateTextPr();
textPr.SetBold(true);
row.SetTextPr(textPr);

page.AddObject(table);
