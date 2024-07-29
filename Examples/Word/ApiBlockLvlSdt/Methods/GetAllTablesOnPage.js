// This example shows how to get a collection of tables on a given absolute page.
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable1 = Api.CreateTable(3, 3);
oTable1.SetWidth("percent", 100);
oTable1.SetStyle(oTableStyle);
oBlockLvlSdt.AddElement(oTable1, 0);
var oTable2 = Api.CreateTable(2, 2);
oTable2.SetWidth("percent", 100);
oTable2.SetStyle(oTableStyle);
oBlockLvlSdt.AddElement(oTable2, 1);
oDocument.AddElement(0, oBlockLvlSdt);
var aTables = oBlockLvlSdt.GetAllTablesOnPage(0);
var oCell = aTables[0].GetRow(1).GetCell(0);
aTables[0].RemoveRow(oCell);