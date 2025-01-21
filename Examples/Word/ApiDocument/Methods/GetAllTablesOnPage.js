// This example shows how to get a collection of tables on a given absolute page.
let document = Api.GetDocument();
let tableStyle = document.GetStyle("Bordered");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 50);
table.SetStyle(tableStyle);
document.Push(table);
let tables = document.GetAllTablesOnPage(0);
let row1 = tables[0].GetRow(0);
row1.Remove();