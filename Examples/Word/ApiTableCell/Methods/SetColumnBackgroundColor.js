// Apply a background color to every cell in a table column in a document.

// How do I change the background color of an entire column of table cells in a document?

// Give all cells in the same column a consistent fill color in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 4);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetRow(0).GetCell(0);
cell.SetColumnBackgroundColor(Api.HexColor('#FF6F3D'));
doc.Push(table);