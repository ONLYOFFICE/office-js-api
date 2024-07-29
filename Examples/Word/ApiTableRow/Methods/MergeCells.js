// This example merges the cells in the row.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
var oRow = oTable.GetRow(0);
oTable.SetWidth("percent", 100);
oRow.MergeCells();
oDocument.Push(oTable);