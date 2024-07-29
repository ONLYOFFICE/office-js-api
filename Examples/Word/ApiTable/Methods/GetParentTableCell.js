// This example shows how to get a table cell that contains the table.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable1 = Api.CreateTable(3, 3);
oTable1.SetWidth("percent", 100);
oTable1.SetStyle(oTableStyle);
oDocument.Push(oTable1);
var oTable2 = Api.CreateTable(2, 2);
oTable2.SetWidth("percent", 100);
oTable2.SetStyle(oTableStyle);
var oCell = oTable1.GetCell(0,0);
oTable1.AddElement(oCell, 0, oTable2);
var oParentTableCell = oTable2.GetParentTableCell();
oParentTableCell.SetShd("clear", 255, 111, 61, false);