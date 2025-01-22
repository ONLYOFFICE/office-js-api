// This example shows how to get a set of the table properties which will be applied to all the regions within a table which match the conditional formatting type.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the bottom 4 point black border to it:");
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle("wholeTable");
table.SetTableLook(true, true, true, true, true, true);
tableStylePr.GetTablePr().SetTableBorderBottom("single", 32, 0, 51, 51, 51);
table.SetStyle(tableStyle);
document.Push(table);