// This example specifies that the current table row will be repeated at the top of each new page wherever this table is displayed.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set all table rows as the table headers:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableLook(true, true, true, true, false, false);
let tableRowPr = tableStyle.GetTableRowPr();
tableRowPr.SetTableHeader(true);
table.SetStyle(tableStyle);
doc.Push(table);