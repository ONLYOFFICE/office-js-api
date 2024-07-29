// This example sets the horizontal alignment to the table.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
oTable.SetHAlign("center");