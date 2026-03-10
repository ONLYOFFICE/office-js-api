// This example sets the background color to all cells in the table row.

// Color the row background.

// How to set the rose color as a row background.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let tableRow = table.GetRow(1);
tableRow.SetBackgroundColor(Api.HexColor('#FF6F3D'));
doc.Push(table);
