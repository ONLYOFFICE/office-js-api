// This example shows how to get the row index.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
oTable.SetWidth("percent", 100);
var oRow = oTable.GetRow(1);
oRow.GetCell(0).GetContent().GetElement(0).AddText("Row index: " + oRow.GetIndex());
oDocument.Push(oTable);