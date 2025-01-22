// This example shows how to get a collection of tables on a given absolute page.
let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 50);
table.SetStyle(tableStyle);
doc.Push(table);
let tables = doc.GetAllTablesOnPage(0);
let row1 = tables[0].GetRow(0);
row1.Remove();