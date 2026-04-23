// Apply a background color to a table cell in a document.

// How do I fill a table cell with a specific color in a document?

// Give a cell a colored background to highlight it visually in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetRow(0).GetCell(0);
cell.SetBackgroundColor(Api.HexColor('#FF6F3D'));
doc.Push(table);