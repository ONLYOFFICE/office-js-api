// This example shows how to get a collection of tables on a given absolute page.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.GetStyle("Bordered");
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 50);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var arrTables = oDocument.GetAllTablesOnPage(0);
var oRow_1 = arrTables[0].GetRow(0);
oRow_1.Remove();