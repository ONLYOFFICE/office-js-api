// Read the background color from a table cell and reuse it elsewhere in a document.

// How do I retrieve the fill color of a table cell and apply it to a paragraph in a document?

// Match a paragraph's color to a cell's background by reading the color value in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);

let cell = table.GetRow(0).GetCell(0);
cell.SetBackgroundColor(Api.HexColor('#afafff'));
const backgroundColor = cell.GetBackgroundColor();

let paragraph = doc.GetElement(0);
paragraph.AddText('This paragraph has the same color as the table cell background: ' + backgroundColor.GetHex());
paragraph.SetColor(backgroundColor);
doc.Push(table);