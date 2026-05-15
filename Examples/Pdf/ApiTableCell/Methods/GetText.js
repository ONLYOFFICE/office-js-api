// Read the inner text of a table cell in a PDF.

// How do I retrieve the plain text from a table cell in a PDF?

// Extract text from a cell and display it in a separate text box on the page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(0).GetCell(0);
cell.AddText("Cell content.");
const text = cell.GetText({TableCellSeparator : ""});

const fill = Api.CreateSolidFill(Api.HexColor('#E8D5B7'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(100), Api.MillimetersToEmus(20), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(120));
shape.GetContent().GetElement(0).AddText("Cell text: " + text);

page.AddObject(table);
page.AddObject(shape);
