// This example shows how to get a number of rows in the table.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 2x2 table and add a new row, so that it becomes 2x3:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var nTableRowsNumber = oTable.GetRowsCount();
oTable.AddRow(oTable.GetRow(1).GetCell(0), true);
var nTableRowsNumber1 = oTable.GetRowsCount();
oDocument.Push(oTable);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The table above had " + nTableRowsNumber + " rows before we added a new one. ");
oParagraph.AddText("Now this table has " + nTableRowsNumber1 + " rows.");
oDocument.Push(oParagraph);