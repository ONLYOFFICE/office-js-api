// This example shows how to create and use the table properties.

// How to create table properties and set it to table style.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the bottom 4 point black border to it:");

let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));

let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);

let tableStylePr = tableStyle.GetConditionalTableStyle("wholeTable");
table.SetTableLook(true, true, true, true, true, true);
let tablePr = tableStylePr.GetTablePr();
tablePr.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
tableStylePr.SetTablePr(tablePr);

table.SetStyle(tableStyle);
doc.Push(table);