// This example shows how to get a collection of tables on a given absolute page.
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));

let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
blockLvlSdt.AddElement(table, 0);

table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
blockLvlSdt.AddElement(table, 1);
doc.AddElement(0, blockLvlSdt);

let tablesOnPage = blockLvlSdt.GetAllTablesOnPage(0);
let cell = tablesOnPage[0].GetRow(1).GetCell(0);
tablesOnPage[0].RemoveRow(cell);