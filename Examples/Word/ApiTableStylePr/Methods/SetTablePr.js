// This example shows how to create and set the table properties which will be applied to all the regions within a table which match the conditional formatting type.

// How to set table properties to table style and set its bottom border.

// Update the table style table properties.

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