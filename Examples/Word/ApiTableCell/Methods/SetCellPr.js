// This example sets the cell properties to the current cell.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable1 = Api.CreateTable(3, 3);
oTable1.SetWidth("percent", 100);
oTable1.SetStyle(oTableStyle);
var oTableCellPr = oTableStyle.GetTableCellPr();
oTable1.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
oTableCellPr.SetCellMarginTop(720);
oDocument.Push(oTable1);
var oTable2 = Api.CreateTable(3, 3);
oTable2.SetWidth("percent", 100);
oTable2.SetStyle(oTableStyle);
oTable2.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
oDocument.Push(oTable2);
oTable2.GetCell(0, 0).SetCellPr(oTableCellPr);