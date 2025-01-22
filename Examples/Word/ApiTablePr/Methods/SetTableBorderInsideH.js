// This example specifies the border which will be displayed on all horizontal table cell borders which are not on the outmost edge of the parent table.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We add the inside horizontal 4 point black border:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableBorderInsideH("single", 32, 0, 51, 51, 51);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);